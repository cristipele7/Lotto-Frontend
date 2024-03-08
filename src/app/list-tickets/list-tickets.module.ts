import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTicketsComponent } from './list-tickets.component';



@NgModule({
  declarations: [
    ListTicketsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ListTicketsComponent
  ],
  exports: [
    ListTicketsComponent
  ]
})
export class ListTicketsModule { }
