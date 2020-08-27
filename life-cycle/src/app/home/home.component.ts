import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'life-cycle - home';

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(){
    this.title = 'Title in HOME component was changed.'
  }
}
