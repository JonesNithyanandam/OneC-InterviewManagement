import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewCandidateComponent } from '../../TSC/new-candidate/new-candidate.component';
import { ScheduleinterviewComponent } from '../../TSC/scheduleinterview/scheduleinterview.component';

@Component({
  selector: 'app-candidateentry',
  templateUrl: './candidateentry.component.html',
  styleUrls: ['./candidateentry.component.scss']
})
export class CandidateentryComponent implements OnInit {

  candidates: any = [];
  showDelete: number = 0;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.candidates = [
      { candid: '0004321', name: 'Jack', mobile: '123456790', status:"Open", resume:'JackResume.pdf'},
      { candid: '0004322', name: 'Anisha Reddy', mobile: '0987654321', status:"Open", resume:'resumecv.doc' },
      { candid: '0004323', name: 'Pushpak Raj', mobile: '2345678091', status:"In Progress", resume:'Resume.pdf' },
      { candid: '0004324', name: 'Tyson Ebenezer', mobile: '123456790', status:"Closed", resume:'cvTyson.doc' },
      { candid: '0004325', name: 'Sita Reddy', mobile: '654321123', status:"In Progress", resume:'qwerty.pdf' },
      { candid: '0004326', name: 'Appu Esumani', mobile: '4321123456', status:"In Progress", resume:'poiuty.doc' },
      { candid: '0004327', name: 'Relana', mobile: '876543211', status:"Open", resume:'relana.doc' }
    ];
  }

  onSubmit(): void {
    let dialogRef = this.dialog.open(NewCandidateComponent, {
      height: '520px',
      width: '700px',
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

  onScheduleInterview(): void {
    let dialogRef = this.dialog.open(ScheduleinterviewComponent, {
      height: '650px',
      ///width: '700px',
    });
  }

}
