import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NumBoxesComponent } from './num-boxes.component';
import { ListTicketsModule } from '../list-tickets/list-tickets.module';



@NgModule({
  declarations: [
    NumBoxesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ListTicketsModule
  ],
  exports: [
    NumBoxesComponent
  ]
})
export class NumBoxesModule { }
