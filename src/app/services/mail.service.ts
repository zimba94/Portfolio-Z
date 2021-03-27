import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Email } from '../interfaces/interfaces';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  sendEmail(email: Email){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset = utf-8'
      })
    };
    return this.http.post<Email>(`${this.baseUrl}/sendEmail.php`, email, httpOptions);
    
  }
}
