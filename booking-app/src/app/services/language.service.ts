import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translateService: TranslateService, private http: HttpClient) { }

  loadLanguage(): Observable<string>{

    const browserLang = this.translateService.getBrowserLang();

    console.log("BROWSER LANG "+browserLang);

    return this.http.get<string>('/assets/i18n/'+browserLang+'.json');
  }
}
