import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITreatments } from '../treatments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreatmentsService {

  private _url: string = '/assets/data/treatments.json';
  // private _url: string = 'https://aticode.pl:8443/dentistoffice/mobile/services';

  constructor(private http: HttpClient) { }

  readTreatmentList(): Observable<ITreatments> {
    return this.http.get<ITreatments>(this._url);
  }
}
