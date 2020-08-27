import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  dateAndTime: Date;

  constructor() {
    this.dateAndTime = new Date();
   }

  ngOnInit(): void {
  }

}
