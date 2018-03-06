
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class AppService {
  constructor(private http: HttpClient) {
  }

  getVideoLinks(): Observable<any> {
      return this.http.get<any>('https://www.googleapis.com/youtube/v3/search' +
        '?order=date&part=snippet&channelId=UCP4g5qGeUSY7OokXfim1QCQ&key=AIzaSyCmedFZ2QVVzQ1cElmU6kPM2PV5YEaQwhY');
    }

  private handleError(err: HttpErrorResponse): Observable<any> {
      return Observable.throw('exception occurred');
  }

  }
