import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { Empleado } from '../card/card.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, MaterialModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() arreglo: Empleado[] = [];
  @Output() emisor = new EventEmitter<string>();

  data: string = '';

  funcionClick(nombre: string) {
    window.alert(`Saludos, ${nombre}`);
  }
}
