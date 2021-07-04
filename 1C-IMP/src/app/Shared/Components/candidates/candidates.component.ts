import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  candidateDetails: any = [];
  searchCandidate: any = [];
  cNameControl = new FormControl();
  skillControl = new FormControl();
  statusControl = new FormControl();
  userType = localStorage.getItem('auth_token');
  options: string[] = ['.Net Core, Azure, Web Api', 'Java, Springboot', 'Database, SQL, Oracle'];
  status: string[] = ['Open', 'In Progress', 'Closed'];
  cNameOptions: string[] = [];
  filteredStatus!: Observable<string[]>;
  filteredOptions!: Observable<string[]>;
  cNamefiltered!: Observable<string[]>;
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });


  constructor() { }

  ngOnInit(): void {
    this.loadData();
    this.loadAutoCompleteData();
    this.candidateDetails.forEach((element: any) => {
      this.cNameOptions.push(element.name);
    });
    console.log(this.cNameOptions);
  }

  

  private _filterStatus(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.status.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterName(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.cNameOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  loadData() {
    if (this.userType == 'PanelUser') {
      this.loadForPanelist();
    } else {
      this.loadForTSC();
    }
  }

  loadForPanelist() {

    this.candidateDetails = [
      { name: 'Theoder Monagan', phone: '8056083932', Status: 'In progress', scheduleDate: '15/05/2021', scheduleTime: '2:00PM - 3:00PM' },
      { name: 'Nagomi Theoder Monagan', phone: '1234567890', Status: 'In progress', scheduleDate: '15/05/2021', scheduleTime: '2:00PM - 3:00PM' },
      { name: 'Violet', phone: '8056083932', Status: 'In progress', scheduleDate: '17/05/2021', scheduleTime: '12:00PM - 1:00PM' },
      { name: 'Jones Nithyanandam', phone: '0987654321', Status: 'Completed', scheduleDate: '10/05/2021', scheduleTime: '2:00PM - 3:00PM' },
      { name: 'Elluri Venkata Vineela', phone: '1234567866', Status: 'Completed', scheduleDate: '10/05/2021', scheduleTime: '2:00PM - 3:00PM' }
    ];
  }
  loadForTSC() {

    this.candidateDetails = [
      { name: 'Theoder Monagan', phone: '8056083932', Status: 'In progress', scheduleDate: '15/05/2021', scheduleTime: '2:00PM - 3:00PM' },
      { name: 'Nagomi Theoder Monagan', phone: '1234567890', Status: 'In progress', scheduleDate: '15/05/2021', scheduleTime: '2:00PM - 3:00PM' },
      { name: 'Violet', phone: '7386088138', Status: 'In progress', scheduleDate: '17/05/2021', scheduleTime: '12:00PM - 1:00PM' },
      { name: 'Jones Nithyanandam', phone: '0987654321', Status: 'Completed', scheduleDate: '10/05/2021', scheduleTime: '2:00PM - 3:00PM' },
      { name: 'Elluri Venkata Vineela', phone: '1234567866', Status: 'Completed', scheduleDate: '10/05/2021', scheduleTime: '2:00PM - 3:00PM' },
      { name: 'Ashis Sahoo', phone: '6543212345', Status: 'In progress', scheduleDate: '18/05/2021', scheduleTime: '2:00PM - 3:00PM' },
      { name: 'Kumarappan Arumugam', phone: '9876543211', Status: 'In progress', scheduleDate: '19/05/2021', scheduleTime: '2:00PM - 3:00PM' },
      { name: 'Sundar Raja Perumal', phone: '7654321890', Status: 'In progress', scheduleDate: '20/05/2021', scheduleTime: '2:00PM - 3:00PM' },
      { name: 'Monagan', phone: '8056083932', Status: 'In progress', scheduleDate: '15/05/2021', scheduleTime: '2:00PM - 3:00PM' },
      { name: 'Appun Nagomi', phone: '1234567890', Status: 'In progress', scheduleDate: '15/05/2021', scheduleTime: '2:00PM - 3:00PM' },
      { name: 'Rebiksha Jennifer', phone: '8056083932', Status: 'In progress', scheduleDate: '17/05/2021', scheduleTime: '12:00PM - 1:00PM' },
      { name: 'Jennifer Jones', phone: '0987654321', Status: 'Completed', scheduleDate: '10/05/2021', scheduleTime: '2:00PM - 3:00PM' },
      { name: 'Vineela', phone: '1234567866', Status: 'Completed', scheduleDate: '10/05/2021', scheduleTime: '2:00PM - 3:00PM' },

    ];
  }

  loadAutoCompleteData() {
    //Candidate name
    this.cNamefiltered = this.cNameControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterName(value))
    );
    //Skill Cluster
    this.filteredOptions = this.skillControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    //Status
    this.filteredStatus = this.statusControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterStatus(value))
    );
  }
}
