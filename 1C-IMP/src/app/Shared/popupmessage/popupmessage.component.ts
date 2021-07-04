import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popupmessage',
  templateUrl: './popupmessage.component.html',
  styleUrls: ['./popupmessage.component.scss']
})
export class PopupmessageComponent implements OnInit {


  radoption: number = 1;
  radTimeoption: number = 1;
  date8: Date | undefined;
  dates: Date[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  radioChange(event: any) {
    console.log(event);
    console.log(event.value);
    this.radoption = event.value;
  }

  radioTimeChange(event: any) {
    this.radTimeoption = event.value;
  }

}
