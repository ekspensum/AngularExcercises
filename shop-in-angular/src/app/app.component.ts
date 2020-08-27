import { Component } from '@angular/core';
import * as products from './products/products.component';
import * as categories from './categories/categories.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-in-angular';

  public product = new products.ProductsComponent();
  public category = new categories.CategoriesComponent();
  public mainBoard = new products.MainBoard('GigaByte', 455.75);
  public ramMemory = new products.RamMemory();

  private ramMemoryList = new Array<products.RamMemory>();
  public getRamMemoryList(): Array<products.RamMemory> {
    this.ramMemoryList.push(new products.RamMemory('ABIT', 147.14));
    this.ramMemoryList.push(new products.RamMemory('MSI', 632.66));
    this.ramMemoryList.push(new products.RamMemory('ASUS', 789.45));
    return this.ramMemoryList;
  }
  public rml = this.getRamMemoryList();
}
