import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-calculator',
  imports: [],
  templateUrl: './screen-calculator.component.html',
  styleUrl: './screen-calculator.component.scss'
})
export class ScreenCalculatorComponent{

  @Input() tab: string[] = [];
  
}
