import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTicketsModule } from './list-tickets/list-tickets.module';
import { HttpClientModule } from '@angular/common/http';
import { TicketDetailsModule } from './ticket-details/ticket-details.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListTicketsModule,
    HttpClientModule,
    TicketDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
