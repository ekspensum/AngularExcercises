import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, Input, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, OnDestroy, 
              AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  weekDays: Array<string> = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  someText = 'some text';
  someObject = new SomeObject();
  
  @Input()
  title: string;
  
  constructor() { }

  /**
   * Destroy element e.g. in directive *ngIf
   */
  ngOnDestroy(): void {
    console.log('ngOnDestroy works!');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked works!')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit works!')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked works!')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit works!')
  }

  /**
   * Run on every change also when run empty method.
   */
  ngDoCheck(): void {
    console.log('DoCheck works!')
  }

  /**
   * Checking changes from binding field by e.g. @Input. Method works only when change object reference (not filed).
   * @param changes  
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges works!');
    console.log(changes); // see console
  }

  
  ngOnInit(): void {
    console.log('On Init event');
  }

  addDay(name: HTMLInputElement){
    this.weekDays.push(name.value);
    name.value = '';
  }

  changeText(text?: string){
    this.someText = 'another text';
    console.log(this.someText);
  }

  changeObject(){
    this.someObject = new SomeObject('another name');
    console.log(this.someObject.someName);
  }
}

class SomeObject {

  someName: string = 'this name';

  constructor(public name?: string){
    this.someName = name;
  }
}