import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { DataRickAndMortyService } from '../../services/data-rick-and-morty.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-lista-personajes',
  standalone: true,
  imports: [MaterialModule, HttpClientModule],
  providers: [DataRickAndMortyService],
  templateUrl: './lista-personajes.component.html',
  styleUrl: './lista-personajes.component.scss',
})
export class ListaPersonajesComponent implements OnInit {
  constructor(private dataRickAndMorty: DataRickAndMortyService) {}
  listaPersonajes: any = {};

  ngOnInit(): void {
    this.dataRickAndMorty.obtenerPersonajes().subscribe({
      next: (data: any) => {
        this.listaPersonajes = data;
        console.log(this.listaPersonajes);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
