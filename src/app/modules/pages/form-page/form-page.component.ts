import { Component } from '@angular/core';
import { CardComponent } from '../../common/components/card/card.component';
import { InputComponent } from '../../common/components/input/input.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { IAddressInterface } from '../../common/interfaces/IAddress.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [
    CardComponent,
    InputComponent,
    HttpClientModule,
    FormsModule,
    CommonModule,
    InputTextModule,
  ],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.scss',
})
export class FormPageComponent {
  cep?: string = '';
  street?: string = '';
  complement?: string = '';
  district?: string = '';
  city?: string = '';
  state?: string = '';

  cepError: boolean = false;

  constructor(private http: HttpClient) {}

  clearFields(): void {
    this.street = '';
    this.complement = '';
    this.district = '';
    this.city = '';
    this.state = '';
    this.cepError = false;
  }

  clearCep(): void {
    if (this.cep?.length != 8) {
      this.clearFields();
      this.cepError = false;
    }
  }

  onInputCep(): void {
    if (this.cep?.length === 8) {
      this.clearFields();
      this.http
        .get<IAddressInterface>(`https://viacep.com.br/ws/${this.cep}/json/`)
        .subscribe((data) => {
          if (!!data.erro) {
            this.cepError = true;
          } else {
            this.cepError = false;
            this.street = data.logradouro;
            this.complement = data.complemento;
            this.district = data.bairro;
            this.city = data.localidade;
            this.state = data.uf;
          }
        });
    }
  }
}
