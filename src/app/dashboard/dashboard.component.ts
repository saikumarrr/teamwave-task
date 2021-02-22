import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  /**
   *Creates an instance of DashboardComponent.
   * @author Sai Kumar
   * @description to navigate to stack module
   * @date 2021-02-21
   * @param {Router} route
   * @memberof DashboardComponent
   */
  constructor(public route: Router) {
    this.route.navigate(['/dashboard/stack']);
  }

  ngOnInit(): void {
  }

}
