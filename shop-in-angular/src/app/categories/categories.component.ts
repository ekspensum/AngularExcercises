import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: string[] = ['main board', 'processors', 'memory', 'hdd'];

  colorClass = 'color';
  inputText = 'input text';
  maxLengt = 10;
  logoUrl = '';
  isDisable = true;

  typeOfCategory = 'komputery stacjonarne';
  machine = 'desktop';
  typeOfCategory2 = 'komputery przenośne';
  machine2 = 'laptop';

  constructor() {
    setTimeout(
      () => {this.isDisable = false}, 
      3000);
   }

  ngOnInit(): void {
  }

  public getCategory(category: number): string {
    return this.categories[category];
  }

  change(event){
    this.inputText = 'zmiana tekstu';
    this.maxLengt = 20;
    this.colorClass = 'color2';
    this.logoUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
    console.log(event.clientX);
    console.log(event); // e.g. .target or .innerText or .innerHTML
  }

  saveType(event){
    this.typeOfCategory = event.target.value;
  }
  saveMachine(event){
    this,this.machine = event.target.value;
  }

}
