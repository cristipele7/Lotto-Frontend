import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTicketsComponent } from './list-tickets.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ListTicketsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class ListTicketsModule { }
