import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent {
  guardarFormulario() {
    window.alert('Formulario Guardado');
  }

  nombreAsistente: string = '';

  listaAsistentes: string[] = [];

  funcionAgregar() {
    this.listaAsistentes.push(this.nombreAsistente);
  }
}
