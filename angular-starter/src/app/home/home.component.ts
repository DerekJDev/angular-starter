import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TourService } from 'ngx-tour-md-menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(public tourService: TourService) { }

  ngOnInit() {
    this.tourService.initialize([{
      anchorId: 'step3',
      content: 'This is step three',
      title: 'Step 3',
    }, {
      anchorId: 'step4',
      content: 'This is step four',
      title: 'Step 4',
      enableBackdrop: true
    }]);
  }

  ngAfterViewInit() {
    setTimeout(() => this.tourService.start(), 1000);
  }

}
