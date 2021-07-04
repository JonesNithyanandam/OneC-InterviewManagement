import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PopupmessageComponent } from '../../Shared/popupmessage/popupmessage.component';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit {

  availability: any = [];
  showDelete: number = 1;
  skillControl = new FormControl();
  filteredOptions!: Observable<string[]>;
  options: string[] = ['.Net Core, Azure, Web Api', 'Java, Springboot', 'Database, SQL, Oracle'];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.availability = [
      { date: '06/05/2021', from: '02:00PM', to: '04:00PM' },
      { date: '06/11/2021', from: '02:00PM', to: '04:00PM' },
      { date: '06/12/2021', from: '02:00PM', to: '04:00PM' },
      { date: '06/20/2021', from: '02:00PM', to: '04:00PM' },
      { date: '06/25/2021', from: '02:00PM', to: '04:00PM' },
      { date: '06/26/2021', from: '02:00PM', to: '04:00PM' },
      { date: '06/27/2021', from: '02:00PM', to: '04:00PM' },
      { date: '06/28/2021', from: '02:00PM', to: '04:00PM' },
      { date: '06/30/2021', from: '02:00PM', to: '04:00PM' },
      { date: '06/31/2021', from: '02:00PM', to: '04:00PM' },

      { date: '07/05/2021', from: '10:00AM', to: '02:00PM' },
      { date: '07/11/2021', from: '11:00AM', to: '04:00PM' },
      { date: '07/12/2021', from: '11:00AM', to: '04:00PM' },
      { date: '07/20/2021', from: '11:00AM', to: '04:00PM' },
      { date: '07/25/2021', from: '11:00AM', to: '04:00PM' },
      { date: '07/26/2021', from: '09:00AM', to: '12:00PM' },
      { date: '07/27/2021', from: '09:00AM', to: '12:00PM' },
      { date: '07/28/2021', from: '09:00AM', to: '12:00PM' },
      { date: '07/30/2021', from: '09:00AM', to: '12:00PM' },
      { date: '07/31/2021', from: '09:00AM', to: '12:00PM' },
    ];

    this.filteredOptions = this.skillControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  onSubmit(): void {
    let dialogRef = this.dialog.open(PopupmessageComponent, {
      height: '550px',
      width: '750px',
    });
  }

  onRowSelect(event: any) {
    console.log(event);
    console.log(this.showDelete);
    this.showDelete = 1;
  }

  onRowUnselect(event: any) {
    console.log(event);
    console.log(this.showDelete);
    this.showDelete = 0;
  }
}