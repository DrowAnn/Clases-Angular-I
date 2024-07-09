import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatListModule],
  exports: [CommonModule, MatCardModule, MatButtonModule, MatListModule],
})
export class MaterialModule {}
