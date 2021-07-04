
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.scss']
})
export class MainCompComponent implements OnInit {

  candidateDetails: any = [];

  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.candidateDetails = [
      { name: 'Theoder Monagan', phone: '8056083932', Status: 'In progress',Totalexp: '5 years', Relexp: '3.9 Years', expertise: '.Net, SQL, HTML, CSS, JQuery', 
      shortDescription: 'Cards can be used in a wide variety of scenarios and can contain many different types of content. Due to this dynamic nature, the appropriate accessibility treatment depends on how is used.', currentCompany: 'Infosys', scheduleTime: '10/05/2021 (2:00PM - 3:00PM)' },
      { name: 'Jones Nithyanandam', phone: '8056096032', Status: 'Rejected',Totalexp: '9.2 years', Relexp: '9.2 Years', expertise: '.Net.Core, SQL, MicroService, Azure', 
      shortDescription: 'Cards can be used in a wide variety of scenarios and can contain many different types of content. Due to this dynamic nature, the appropriate accessibility treatment depends on how is used.', currentCompany: 'HCL', scheduleTime: '14/05/2021 (4:00PM - 5:00PM)' },
      { name: 'Oscar Jayagaran', phone: '5608393212', Status: 'selected', Totalexp: '7.1 years', Relexp: '6.9 Years', expertise: '.Net', 
      shortDescription: 'Cards can be used in a wide variety of scenarios and can contain many different types of content. Due to this dynamic nature, the appropriate accessibility treatment depends on how is used.', currentCompany: 'Vertusa', scheduleTime: '12/05/2021 (2:00PM - 3:00PM)' },
      { name: 'Nagomi', phone: '1234567890', Status: 'In Progress', Totalexp: '2 years', Relexp: '2 Years', expertise: '.Net', 
      shortDescription: 'Cards can be used in a wide variety of scenarios and can contain many different types of content. Due to this dynamic nature, the appropriate accessibility treatment depends on how is used.', currentCompany: 'Zoho', scheduleTime: '20/05/2021 (12:00PM - 1:00PM)' },
      { name: 'Test', phone: '0987654321', Status: 'In Progress', Totalexp: '1.2 years', Relexp: '1.2 Years', expertise: '.Net', 
      shortDescription: 'Cards can be used in a wide variety of scenarios and can contain many different types of content. Due to this dynamic nature, the appropriate accessibility treatment depends on how is used.', currentCompany: 'Infosys', scheduleTime: '17/05/2021 (2:00PM - 3:00PM)' }
    ];
  }
}
