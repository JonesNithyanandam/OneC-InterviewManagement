import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-scheduleinterview',
  templateUrl: './scheduleinterview.component.html',
  styleUrls: ['./scheduleinterview.component.scss']
})
export class ScheduleinterviewComponent implements OnInit {

  skillControl = new FormControl();
  filteredOptions!: Observable<string[]>;
  options: string[] = ['.Net Core, Azure, Web Api', 'Java, Springboot', 'Database, SQL, Oracle'];
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  availability: any = [];
  constructor() { }

  ngOnInit(): void {
    this.loadAutoCompleteData();
    this.availability = [
      { panelId: '808390', panelName:'Jones', from: '02:00PM', to: '04:00PM', available: 'Available' },
      { panelId: '808390', panelName:'Jones', from: '10:00AM', to: '12:00PM', available: 'Available' },
      { panelId: '808390', panelName:'Jones', from: '09:00AM', to: '10:00AM', available: 'Available' },
      { panelId: '808390', panelName:'Jones', from: '11:00AM', to: '12:00PM', available: 'Available' }
    ]
  }

  loadAutoCompleteData() {
    //Skill Cluster
    this.filteredOptions = this.skillControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}
