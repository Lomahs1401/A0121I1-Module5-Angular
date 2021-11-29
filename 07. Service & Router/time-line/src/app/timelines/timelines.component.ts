import { Component, OnInit } from '@angular/core';
import { DateUtilService } from '../date-util.service';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {

  output = '';
  constructor(private dateUtilService: DateUtilService) { }

  ngOnInit(): void {
    console.log("HELLO!");
  }

  onChange(value: string | number | Date) {
    console.log(value);
    this.output = this.dateUtilService.getDiffToNow(value);
  }
}
