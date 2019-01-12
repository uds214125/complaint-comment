
import { Injectable, Inject } from '@angular/core';
import { isNullOrUndefined } from 'util';

// import { User } from './user.model';
// import { CookieService } from '../../shared/services/cookie.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CommentService {
  public url; options;
  constructor(
    // private cookieService: CookieService,
        private _httpClient: HttpClient
    ) {
        this.url = 'http://localhost:4125/api';
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        this.options = { headers: headers };
    }
    getCommentByUser(userId): Observable<any> {
        const url = `${this.url}/comments/find/${userId}`;
        return this._httpClient.get(url);
    }

    updateCommentByUser(data): Observable<any> {
        console.log(' data : ', data);
        const url = `${this.url}/comments/update`;
        return this._httpClient.patch(url, data, this.options);
    }
}


