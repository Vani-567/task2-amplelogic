import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  
  cards_data=[
    {"text":"Onboarding This Month","percentage":"+45%","count":15,"icon1":"","iconClass1":"fa fa-lightbulb-o fa-2x text-white","iconClass2":"fa fa-line-chart text-success"},
    {"text":"Total Onboarding This Year","percentage":"+16%","count":135,"icon1":"","iconClass1":"fa fa-user-o fa-2x text-white","iconClass2":"fa fa-line-chart text-success"},

    {"text":"Onboarding Journeys In Progress","percentage":"-10%","count":5,"icon1":"","iconClass1":"fa fa-tasks fa-2x text-white","iconClass2":"fa fa-level-down text-danger"},
    {"text":"Avg Onboarding Evalution Score","percentage":"+5%","count":8.5,"icon1":"","iconClass1":"fa fa-file fa-2x text-white","iconClass2":"fa fa-line-chart text-success"}

  ]
}
