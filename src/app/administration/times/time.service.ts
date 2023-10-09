import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Time } from './time.types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private API_PATH: string = 'time';

  private timeSource = new Subject<Time>();

  public asObservable() {
    return this.timeSource.asObservable();
  }

  public register(time: Time) {
    this.timeSource.next(time);
  }

  private deleteSource = new Subject<Time>();

  public deleteAsObservable() {
    return this.deleteSource.asObservable();
  }

  public ticketDelete(time: Time) {
    this.deleteSource.next(time);
  }

  constructor(
    private readonly httpClient: HttpClient
  ) {

  }

  public get(): Observable<Time[]> {
    return this.httpClient.get(`${environment.backend.api}/${this.API_PATH}`).pipe(
      map(
        (res: any) => {
          return res.map(
            (result: any) => <Time[]>result
          );
        }
      )
    );
  }
}
