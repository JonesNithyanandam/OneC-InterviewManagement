import { Component, EventEmitter, OnInit } from '@angular/core';
import { ISlimScrollOptions, SlimScrollEvent } from 'ngx-slimscroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Panelist';

  opts!: ISlimScrollOptions;
  scrollEvents!: EventEmitter<SlimScrollEvent>;

  constructor() { }

  ngOnInit(): void {
    this.scrollEvents = new EventEmitter<SlimScrollEvent>();
    this.opts = {
      position: 'left',// | 'right',
      barBackground: '#C9C9C9',
      barOpacity: '0.8',
      barWidth: '10',
      barBorderRadius: '20',
      barMargin: '0',
      gridBackground: '#D9D9D9',
      gridOpacity: '1',
      gridWidth: '2',
      gridBorderRadius: '20',
      gridMargin: '0',
      alwaysVisible: true,
      visibleTimeout: 1000,
      // scrollSensitivity: 1,
      alwaysPreventDefaultScroll: true,
    }
  }
}