import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormPageComponent } from './modules/pages/form-page/form-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormPageComponent],
  template: `<router-outlet />`
})
export class AppComponent {
  title = 'BuscarCep';
}
