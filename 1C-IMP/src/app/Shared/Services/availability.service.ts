import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedbackheading } from '../Interface/feedbackheading';

@Injectable()
export class AvailabilityService {
  constructor(private http: HttpClient) { }

  getCustomersLarge() {
      return this.http.get<any>('assets/customers-large.json')
          .toPromise()
          .then(res => <Feedbackheading[]>res.data)
          .then(data => { return data; });
  }
}
