import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { LanguageService } from '../services/language.service';
import { ITranslate } from '../interfaces/itranslate';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  translate: ITranslate;
  username: string;
  password: string;

  constructor(public auth: AuthenticationService, private languageService: LanguageService) {
    this.languageService.loadLanguage().subscribe(resp => {
      this.translate = resp;
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.auth.authenticate(this.username, this.password).subscribe();
  }

}
