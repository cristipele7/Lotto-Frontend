import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service';
import { Ticket } from '../models';
import { filter, lastValueFrom } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.sass']
})
export class ListTicketsComponent implements OnInit {
  numOfBoxes = new FormControl(1);
  superzahl = new FormControl(true);
  tickets: Ticket[] = []
  frequency:  number[] = []

  constructor(private httpService: HttpService, private router: Router) { }
  
  async ngOnInit() {
    await this.getTicketsAsync()
  }

  async getTicketsAsync() {
    const tickets$ = this.httpService.getTickets()
    this.tickets = await lastValueFrom(tickets$);
    this.calculateFrequency()
  }

  calculateFrequency() {
    let allNumbers: number[] = []
    this.tickets.forEach(ticket => ticket.boxes?.forEach(box => {
      allNumbers = [...allNumbers, ...box.numbers]
    }))
    let frequency: number[] = Array(49).fill(0)
    for (let i = 0; i < 49; i++) {
      const filterNumbers = allNumbers.filter(num => num === i + 1)
      frequency[i] = filterNumbers.length
    }
    this.frequency = frequency
  }
  
  async drawTickets() {
    const createTicket$ = this.httpService.createTicket({
      numberOfBoxes: this.numOfBoxes.value ?? 1,
      superzahl: this.superzahl.value ?? false
    })
    await lastValueFrom(createTicket$);
    await this.getTicketsAsync()
  }

  clickTicket(id: number) {
    this.router.navigate(['details', id]);
  }

  async deleteTicket(id: number) {
    const tickets$ = this.httpService.deleteTicket(id)
    await lastValueFrom(tickets$);
    await this.getTicketsAsync()
  }
}
