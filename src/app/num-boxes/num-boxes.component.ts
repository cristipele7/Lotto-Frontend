import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from '../service';
import { lastValueFrom } from 'rxjs';
import { ListTicketsComponent } from '../list-tickets/list-tickets.component';

@Component({
  selector: 'app-num-boxes',
  templateUrl: './num-boxes.component.html',
  styleUrls: ['./num-boxes.component.sass'],
})
export class NumBoxesComponent {
  numOfBoxes = new FormControl(1);
  superzahl = new FormControl(false);

  constructor(private httpService: HttpService, private listTicketsComponent: ListTicketsComponent) { }
  
  async drawTickets() {
    const createTicket$ = this.httpService.createTicket({
      numberOfBoxes: this.numOfBoxes.value ?? 1,
      superzahl: this.superzahl.value ?? false
    })
    await lastValueFrom(createTicket$);
  }
}
