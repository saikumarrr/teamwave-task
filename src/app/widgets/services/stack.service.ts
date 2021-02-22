import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StackService {

  // declaring apiUrl
  questionsUrl: string = "https://api.stackexchange.com/2.2/questions?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=activity&filter=default"
  
  // dependency injecting
  constructor(public http: HttpClient) { }
  
  /**
   * @description to get data from API
   * change above questionsUrl (API) if another api data required
   * @author Sai Kumar
   * @date 2021-02-21
   * @returns recieved data from api
   * @memberof StackService
   */
  getAllQuestions() {
    return this.http.get(this.questionsUrl);
  }

}
