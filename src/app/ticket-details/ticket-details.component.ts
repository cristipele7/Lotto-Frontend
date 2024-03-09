import { Component } from '@angular/core';
import { Ticket } from '../models';
import { HttpService } from '../service';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.sass']
})
export class TicketDetailsComponent {
  ticket: Ticket | null = null

  constructor(private httpService: HttpService, private router: Router, private route: ActivatedRoute) { }
  
  async ngOnInit() {
    const selectedID = this.route.snapshot.paramMap.get('id')
    if (selectedID) {
      const ticket$ = this.httpService.getTicket(parseInt(selectedID))
      this.ticket = await lastValueFrom(ticket$);
    }
  }

  back() {
    this.router.navigate(['/'])
  }
}
