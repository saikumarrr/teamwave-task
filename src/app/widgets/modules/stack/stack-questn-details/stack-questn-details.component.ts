import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stack-questn-details',
  templateUrl: './stack-questn-details.component.html',
  styleUrls: ['./stack-questn-details.component.css']
})
export class StackQuestnDetailsComponent implements OnInit {
  @Input() eachQuestion:any; // recieving each question through @Input() from list component
  constructor() { }

  ngOnInit(): void {
  }

}
