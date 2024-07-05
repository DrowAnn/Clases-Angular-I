import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { MaterialModule } from '../../material/material.module';

export interface Empleado {
  nombre: string;
  ocupacion: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [InputComponent, MaterialModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  mensajeDelHijo: string = '';

  listaEmpleados = [
    { nombre: 'Robert', ocupacion: 'Estudiante y Trabajador' },
    { nombre: 'Isabella', ocupacion: 'Estudiante' },
  ];

  onEmit(mensaje: string) {
    this.mensajeDelHijo = mensaje;
  }
}
