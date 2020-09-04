import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILanguage } from '../interfaces/ilanguage';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  readLanguages(): Observable<Array<ILanguage>>{
    return this.http.get<Array<ILanguage>>('/assets/file-api/languages.json');
  }

  saveEmployee(employee: Employee): Observable<string> {
    const server = 'http://localhost:8080/addEmpolyee';
    // const server = 'https://jsonplaceholder.typicode.com/posts';

    return this.http.post(server, employee, {responseType: 'text'});
  }
}
