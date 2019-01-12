
import { Injectable, Inject } from '@angular/core';
import { isNullOrUndefined } from 'util';

// import { User } from './user.model';
// import { CookieService } from '../../shared/services/cookie.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ComplaintService {
  public url;
  public userId; options;
  constructor(
    // private cookieService: CookieService,
        private _httpClient: HttpClient
    ) {
        this.url = 'http://localhost:4125/api';
        this.userId = JSON.parse(localStorage.getItem('currentUser')).id;

        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        this.options = { headers: headers };
    }
    getComplaintsByUser(): Observable<any> {
        const url = `${this.url}/complaints/find/${this.userId}`;
        return this._httpClient.get(url);
        //   .map(res => res.json());
        //   .catch((e: any) => Observable.throw(this._errorService.handleError(e)));
    }
    addComplaint(data): Observable<any> {
        const url = `${this.url}/complaints/create/${this.userId}`;
        return this._httpClient.post(url, data, this.options);
        //   .map(res => res.json());
        //   .catch((e: any) => Observable.throw(this._errorService.handleError(e)));
    }
}


