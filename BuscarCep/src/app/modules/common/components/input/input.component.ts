import { InputTextModule } from 'primeng/inputtext';
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [InputTextModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {}
  @Input() label: string = 'Placeholder';
  @Input() id?: string;
  @Input() name?: string;
  @Input() value!: string;
  @Output() cepBlur = new EventEmitter<void>();

  event() : void {
    this.cepBlur.emit();
  }


  private touched = false;

  onTouched: any = () => {};

  onValueChange(): void {
    this.onChange(this.value);
    this.markAsTouched();
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  private markAsTouched() {
    if (!this.touched) {
      this.touched = true;
      this.onTouched();
    }
  }

  onChange = (value: string) => {};

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  disabled!: boolean;

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: string) {
    this.value = value;
  }
}
