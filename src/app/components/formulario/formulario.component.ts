import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestService } from '../../services/test.service';
import { Empleado } from '../card/card.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent implements OnInit {
  nombreEmpleado: string = '';
  ocupacionEmpleado: string = '';
  listaEmpleados: Empleado[] = [];

  constructor(private testService: TestService) {}

  ngOnInit(): void {
    this.listaEmpleados = this.testService.obtenerEmpleados();
  }

  guardarFormulario() {
    window.alert('Formulario Guardado');
  }

  funcionAgregar() {
    this.testService.agregarEmpleado({
      nombre: this.nombreEmpleado,
      ocupacion: this.ocupacionEmpleado,
    });
  }
}
