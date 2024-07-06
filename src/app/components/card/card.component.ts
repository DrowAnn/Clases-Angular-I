import { Component, OnDestroy, OnInit } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { MaterialModule } from '../../material/material.module';
import { TestService } from '../../services/test.service';

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
export class CardComponent implements OnInit, OnDestroy {
  listaEmpleados: Empleado[] = [];

  constructor(private testService: TestService) {}

  ngOnInit(): void {
    console.log('Se inicio el componente');
    this.listaEmpleados = this.testService.obtenerEmpleados();
  }

  ngOnDestroy(): void {
    console.log('Se ha destruido el componente');
  }

  mensajeDelHijo: string = '';

  onEmit(mensaje: string) {
    this.mensajeDelHijo = mensaje;
  }
}
