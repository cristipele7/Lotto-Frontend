import { HttpClient } from  '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from './models';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  createTicket(body: { numberOfBoxes: number, superzahl: boolean }): Observable<Ticket> {
    return this.http.post<Ticket>(`${this.url}/ticket`, body);
  }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.url}/ticket`);
  }

  getTicket(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.url}/ticket/${id}`);
  }

  deleteTicket(id: number): Observable<Ticket> {
    return this.http.delete<Ticket>(`${this.url}/ticket/${id}`);
  }
}
