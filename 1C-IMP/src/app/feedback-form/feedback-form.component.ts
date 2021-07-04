import { Component, Inject, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

interface City {
  name: string,
  code: string
}

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss'],
  providers: [MessageService]
})
export class FeedbackFormComponent implements OnInit {
  public evalutionSummaryDetails: any = [];
  public candidateDetails: any = [];
  cities: City[];
  comments: string = "comments";
  public textareavalue: string = "Very Good knowledge in .net , ready to work on CTS";
  public textareacomments: string = "Comments ig good about the candidate";
  activeState: boolean[] = [true, false, false];
  currentRate = 5;
  candidate: any = [];
  cNameOptions: string[] = [];
  cNamefiltered!: Observable<string[]>;
  cNameControl = new FormControl();

  constructor(
    private messageService: MessageService,
    public dialog: MatDialog) {

    this.cities = [
      { name: '1', code: '1' },
      { name: '2', code: '2' },
      { name: '3', code: '3' },
      { name: '4', code: '4' },
    ];
  }

  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
  }

  loadForPanelist() {
    this.candidate = [
      { name: 'Theoder Monagan', phone: '8056083932', Status: 'In progress', scheduleDate: '15/05/2021', scheduleTime: '2:00PM - 3:00PM' },
      { name: 'Nagomi Theoder Monagan', phone: '1234567890', Status: 'In progress', scheduleDate: '15/05/2021', scheduleTime: '2:00PM - 3:00PM' },
      { name: 'Violet', phone: '8056083932', Status: 'In progress', scheduleDate: '17/05/2021', scheduleTime: '12:00PM - 1:00PM' }
    ];
  }

  loadAutoCompleteData() {
    //Candidate name
    this.cNamefiltered = this.cNameControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterName(value))
    );
  }

  ngOnInit(): void {
    this.loadData();
    this.loadForPanelist();
    this.candidate.forEach((element: any) => {
      this.cNameOptions.push(element.name);
    });
  }

  private _filterName(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.cNameOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  loadData() {
    this.evalutionSummaryDetails = [
      { "competency": "Engineering Concepts(Architectural Concerns and Design Paradigims)", "rating": "1", "comments": "NA" },
      { "competency": "Platforms(.Net,Java,C,C++)", "rating": "2", "comments": "NA" },
      { "competency": "Product and Framework(AWS,Azure,GCP)", "rating": "2", "comments": "NA" },
      { "competency": "Programming Languages(.Net,Java,C,C++)", "rating": "2", "comments": "NA" },
      { "competency": "Agile Process and DevOps", "rating": "2", "comments": "NA" },
      { "competency": "Security and Performances", "rating": "2", "comments": "NA" },
      { "competency": "Communication Skills", "rating": "2", "comments": "NA" },
      { "competency": "Communication Skills", "rating": "2", "comments": "NA" },
    ];

    this.candidateDetails = [
      { "date": "15/05/2021", "candidateId": "786167", "candidateName": "Nagomi Theoder Monagan", "skilfamily": "122" }
    ];
  }

  onSubmit(): void {
   
  }
}

// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'dialog-overview-example-dialog.html',
// })
// export class DialogOverviewExampleDialog {

//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }
