import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service';
import { Ticket } from '../models';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.sass']
})
export class ListTicketsComponent implements OnInit {
  tickets: Ticket[] = []

  constructor(private httpService: HttpService) { }
  
  async ngOnInit() {
    await this.getTicketsAsync()
  }

  async getTicketsAsync() {
    const tickets$ = this.httpService.getTickets()
    this.tickets = await lastValueFrom(tickets$);
  }
}
