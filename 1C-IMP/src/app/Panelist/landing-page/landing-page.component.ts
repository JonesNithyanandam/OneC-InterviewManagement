import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  drawerExpanded = false;
  currentURL = 'Dashboard';
  userType = localStorage.getItem('auth_token');

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  dashboardSidenavToggle(e: boolean) {
    this.drawerExpanded = this.drawerExpanded ? false : true;
  }

  openDrawer(flag: number) {
    this.drawerExpanded = (flag !== 0) ? true : false;
  }

  navigate(screenName: string) {
    this.openDrawer(0);
    var redirect = '/landing';
    switch (screenName) {
      case "candidates":
        this.currentURL = "All Candidates";
        redirect += '/candidates';
        break;
      case "feedback":
        this.currentURL = "Candidate Feedback";
        redirect += '/feedback';
        break;
      case "availability":
        this.currentURL = "My Availability";
        redirect += '/availability';
        break;
        case "candidatesentry":
        this.currentURL = "Candidates Entry";
        redirect += '/candidatesentry';
        break;
      case "assigncand":
        this.currentURL = "Assign Candidate";
        redirect += '/assigncand';
        break;
      case "schedule":
        this.currentURL = "schedule Candidates";
        redirect += '/schedule';
        break;
        case "viewcandidate":
        this.currentURL = "View Candidates Status";
        redirect += '/viewcandidate';
        break;
    }
    console.log(redirect);
    this.router.navigate([redirect]);

  }

}
