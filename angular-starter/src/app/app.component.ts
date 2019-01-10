import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TourService } from 'ngx-tour-md-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angular-starter';

  constructor(public tourService: TourService) { }

  ngOnInit() {
    this.tourService.initialize([{
      anchorId: 'step1',
      content: 'This is the message25 logo',
      title: 'message25 logo'
    }, {
      anchorId: 'step2',
      content: 'Click this button to tour the home page',
      title: 'Change routes',
      enableBackdrop: true,
      placement: 'below'
    }, {
      anchorId: 'step10',
      content: '',
      title: '',
      route: 'home'
    }]);
  }

  ngAfterViewInit() {
    setTimeout(() => this.tourService.start(), 1000);
  }
}
