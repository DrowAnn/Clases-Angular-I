import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';
import { Empleado } from '../card/card.component';

@Component({
  selector: 'app-listado-empleados',
  standalone: true,
  imports: [],
  templateUrl: './listado-empleados.component.html',
  styleUrl: './listado-empleados.component.scss',
})
export class ListadoEmpleadosComponent implements OnInit {
  listaEmpleados: Empleado[] = [];
  constructor(private testService: TestService) {}
  ngOnInit(): void {
    this.listaEmpleados = this.testService.obtenerEmpleados();
  }
}
