import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCompComponent } from './main-comp/main-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// Slim scroll
import { NgSlimScrollModule, SLIMSCROLL_DEFAULTS } from 'ngx-slimscroll';
// Bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
//Full Calendar
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import timeGrigPlugin from '@fullcalendar/timegrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
// Material
import { MaterialModule } from '../app/Shared/Modules/material/material.module';
// PrimeNg
import { TableModule } from 'primeng/table';
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { RadioButtonModule } from "primeng/radiobutton";
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from "primeng/dropdown";
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { RatingModule } from 'primeng/rating';
//Components
import { HeaderComponent } from './header/header.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { SideNavMenuComponent } from './side-nav-menu/side-nav-menu.component';
import { LoginComponent } from './Login/login/login.component';
import { UserroleComponent } from './Login/userrole/userrole.component';
import { LoginmasterComponent } from './Login/loginmaster/loginmaster.component';
import { LandingPageComponent } from './Panelist/landing-page/landing-page.component';
import { CandidatesComponent } from './Shared/Components/candidates/candidates.component';
import { AvailabilityComponent } from './Panelist/availability/availability.component';
import { PopupmessageComponent } from './Shared/popupmessage/popupmessage.component';
import { CandidateentryComponent } from './TSC/candidateentry/candidateentry.component';
import { ScheduleinterviewComponent } from './TSC/scheduleinterview/scheduleinterview.component';
import { AssigncandidateComponent } from './TSC/assigncandidate/assigncandidate.component';
import { ViewcandidatestatusComponent } from './TSC/viewcandidatestatus/viewcandidatestatus.component';
import { NewCandidateComponent } from './TSC/new-candidate/new-candidate.component';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGrigPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    MainCompComponent,
    HeaderComponent,
    FeedbackFormComponent,
    SideNavMenuComponent,
    LoginComponent,
    UserroleComponent,
    LoginmasterComponent,
    LandingPageComponent,
    CandidatesComponent,
    AvailabilityComponent,
    PopupmessageComponent,
    CandidateentryComponent,
    ScheduleinterviewComponent,
    AssigncandidateComponent,
    ViewcandidatestatusComponent,
    NewCandidateComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Slim scroll
    NgSlimScrollModule,
    // Bootstrap
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    //Full Calendar
    FullCalendarModule,
    // Material
    MaterialModule,
    //PrimeNg
    TableModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    InputTextareaModule,
    AccordionModule,
    DropdownModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    ProgressBarModule,
    RatingModule
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [
    // OPTIONAL : provide default global settings which will be merge with component options.
    {
      provide: SLIMSCROLL_DEFAULTS,
      useValue: {
        alwaysVisible: false,
        gridOpacity: '0.2', barOpacity: '0.5',
        gridBackground: '#fff',
        gridWidth: '6',
        gridMargin: '2px 2px',
        barBackground: '#fff',
        barWidth: '20',
        barMargin: '2px 2px'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
