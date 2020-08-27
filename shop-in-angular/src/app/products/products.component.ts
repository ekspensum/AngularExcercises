import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  pi: number = Math.PI;
  currentDate = new Date();
  hddList = new Array<HDD>();

  constructor() {
    this.hddList.push(new HDD('Caviar', 258.45, 250));
    this.hddList.push(new HDD('Optane', 1300.11, 450));
    this.hddList.push(new HDD('ADATA', 500.20, 480));
  }

  ngOnInit(): void {
  }


}

export class MainBoard {

  constructor(public name: string, public price: number) {

  }
}

export class RamMemory {

  constructor(public name?: string, public price?: number){
  }

}

export class HDD {
  private name: string;
  private price: number;
  private volume: number;

  constructor(name: string, price: number, volume: number){
    this.name = name;
    this.price = price;
    this.volume = volume;
  }
}
