import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiServices {

  constructor(private http: HttpClient) {
  }
  getDonorsList() {
    return this.http.get('./assets/donors.json');
  }
}
