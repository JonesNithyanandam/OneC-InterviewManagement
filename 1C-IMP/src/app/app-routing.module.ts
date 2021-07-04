import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { LoginmasterComponent } from './Login/loginmaster/loginmaster.component';
import { MainCompComponent } from './main-comp/main-comp.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { LandingPageComponent } from './Panelist/landing-page/landing-page.component';
import { CandidatesComponent } from './Shared/Components/candidates/candidates.component';
import { AvailabilityComponent } from './Panelist/availability/availability.component';

import { CandidateentryComponent } from './TSC/candidateentry/candidateentry.component';
import { ScheduleinterviewComponent } from './TSC/scheduleinterview/scheduleinterview.component';
import { AssigncandidateComponent } from './TSC/assigncandidate/assigncandidate.component';
import { ViewcandidatestatusComponent } from './TSC/viewcandidatestatus/viewcandidatestatus.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'landing', component: LandingPageComponent,
    children: [
      {
        path: 'candidates',
        component: CandidatesComponent
      },
      {
        path: 'feedback',
        component: FeedbackFormComponent
      },
      {
        path: 'availability',
        component: AvailabilityComponent
      },
      {
        path: 'candidatesentry',
        component: CandidateentryComponent
      },
      {
        path: 'assigncand',
        component: AssigncandidateComponent
      },
      {
        path: 'schedule',
        component: ScheduleinterviewComponent
      },
      {
        path: 'viewcandidate',
        component: ViewcandidatestatusComponent
      }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
