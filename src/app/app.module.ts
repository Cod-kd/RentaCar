import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CarsTableComponent } from './cars-table/cars-table.component';
import { HistoryTableComponent } from './history-table/history-table.component';
import { WebporfileinformationTableComponent } from './webporfileinformation-table/webporfileinformation-table.component';
import { LogRegComponent } from './log-reg/log-reg.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarsTableComponent,
    HistoryTableComponent,
    WebporfileinformationTableComponent,
    LogRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
