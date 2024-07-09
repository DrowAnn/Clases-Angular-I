import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';

export const routes: Routes = [
  {
    path: '',
    component: CardComponent,
  },
  {
    path: 'input',
    component: InputComponent,
  },
  {
    path: 'formulario',
    component: FormularioComponent,
  },
  {
    path: 'personajes',
    component: ListaPersonajesComponent,
  },
];
