import { Injectable } from '@angular/core';
import { Empleado } from '../components/card/card.component';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private listaEmpleados = [
    { nombre: 'Robert', ocupacion: 'Estudiante y Trabajador' },
    { nombre: 'Isabella', ocupacion: 'Estudiante' },
    { nombre: 'Alexander', ocupacion: 'Estudia y Lolea' },
  ];
  constructor() {}

  agregarEmpleado(empleado: Empleado) {
    this.listaEmpleados.push(empleado);
  }

  obtenerEmpleados() {
    return this.listaEmpleados;
  }
}
