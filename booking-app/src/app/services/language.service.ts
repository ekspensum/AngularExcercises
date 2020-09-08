import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ITranslate } from '../interfaces/itranslate';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  serveLanguages = ['pl', 'en'];

  constructor(private translateService: TranslateService, private http: HttpClient) { }
  loadLanguage(): Observable<ITranslate> {
    const browserLang = this.translateService.getBrowserLang();
    for (let index = 0; index < this.serveLanguages.length; index++) {
      if (browserLang === this.serveLanguages[index]) {
        return this.http.get<ITranslate>('/assets/i18n/' + browserLang + '.json');
      }
    }
    return this.http.get<ITranslate>('/assets/i18n/en.json');
  }
}
