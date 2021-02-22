import { Component, OnInit } from '@angular/core';
import { StackService } from '../../../services/stack.service';

@Component({
  selector: 'app-stack-list',
  templateUrl: './stack-list.component.html',
  styleUrls: ['./stack-list.component.css']
})
export class StackListComponent implements OnInit {

  totalQuestions: any;
  name: string;
  filteredItems: any;
  selectedFilter: any = "title";
  filterTypes = [
    { "label": "Question", "value": "title" },
    { "label": "Tags", "value": "tags" },
    { "label": "Author", "value": "Question" },
  ]
  dataRecieved: any;
  nextNum;
  defaultPageNumber = 0;
  pageNumber: number = 1;
  finalListDetails = [];
  disableNxtBtn: boolean;
  disablePrevBtn: boolean;
  constructor(public stackService: StackService) { }

  ngOnInit(): void {
    this.getQuestions();
    setTimeout(() => {
      this.next();
    }, 1000);
  }
  /**
   * @description getting api data from service
   * @author Sai Kumar
   * @date 2021-02-21
   * @memberof StackListComponent
   */
  getQuestions() {
    this.stackService.getAllQuestions().subscribe((dataRecieved: any) => {
      // console.log('data', dataRecieved);
      this.dataRecieved = dataRecieved.items;
      this.totalQuestions = dataRecieved.items;
      this.pageNumber = 0;
    })
  }

  /**
   * @description code for search filter
   * @author Sai Kumar
   * @date 2021-02-21
   * @param {*} value
   * @memberof StackListComponent
   */
  filterItem(value) {
    if (!value) {
      // when nothing has typed
      this.getQuestions();
    }
    // console.log('this.selectedFilter ', this.selectedFilter);
    if (this.selectedFilter == "tags") {
      this.filteredItems = Object.assign([], this.dataRecieved).filter(
        item => item.tags.forEach((element, index) => {
          element[index].toLowerCase().indexOf(value.toLowerCase()) > -1
        })
      )
    }

    // filter method for search using questions
    this.filteredItems = Object.assign([], this.dataRecieved).filter(
      item => item[this.selectedFilter ? this.selectedFilter : "title"].toLowerCase().indexOf(value.toLowerCase()) > -1
    )
    this.totalQuestions = this.filteredItems;
    this.finalListDetails = this.filteredItems;
    // this.resetPagination()
    this.pageNumber = 0;
  }

  /**
   * @description to call prev page data present in available data, 
   * using slice method in available data
   * @author Sai Kumar
   * @date 2021-02-21
   * @memberof StackListComponent
   */
  prev() {
    console.log(this.defaultPageNumber);
    if (this.defaultPageNumber > 3) {
      this.finalListDetails = this.totalQuestions.slice(this.defaultPageNumber - 6, this.defaultPageNumber - 3);
      this.defaultPageNumber -= 3;
      this.pageNumber = this.pageNumber - 1;
    } else {
      alert("data finished");
      this.disablePrevBtn = true;
    }
    // console.log(this.defaultPageNumber);
  }

  /**
   * @description to call next page data present in available data,
   * using slice method in available data
   * @author Sai Kumar
   * @date 2021-02-21
   * @memberof StackListComponent
   */
  next() {
    console.log(this.defaultPageNumber);
    if (this.totalQuestions.length > this.defaultPageNumber) {
      this.finalListDetails = this.totalQuestions.slice(this.defaultPageNumber, this.defaultPageNumber + 3);
      this.defaultPageNumber += 3;
      this.pageNumber = this.pageNumber + 1;
    } else {
      this.disableNxtBtn = true;
      alert("data finished");
    }
    console.log(this.defaultPageNumber);
  }

  resetPagination() {
    this.defaultPageNumber = 0;
    // this.pageNumber = 0;
  }

  /**
   * @description in rare conditions need to using this, to call function in every change detection
   * just making previous button disable if pageNumber  == 0 || 1
   * @author Sai Kumar
   * @date 2021-02-21
   * @memberof StackListComponent
   */
  ngDoCheck() {
    if (this.pageNumber == (1 || 0)) {
      this.disablePrevBtn = true;
    } else {
      this.disablePrevBtn = false;
    }
  }

}
