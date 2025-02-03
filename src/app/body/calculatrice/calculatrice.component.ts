import { Component, OnInit } from '@angular/core';
import { ScreenCalculatorComponent } from '../screen-calculator/screen-calculator.component';

@Component({
  selector: 'app-calculatrice',
  imports: [ScreenCalculatorComponent],
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.scss'
})

export class CalculatriceComponent implements OnInit {

  tilte!: string;
  keypadTab = Array.from({ length: 9 }, (_,i) => i);

  valueSymbol!: string;

  tabNumber: string [] = [];

  ngOnInit(): void {
    this.tilte = "Calcultratice"
    this.tabNumber = [];
  }

  onNumberClick(value: number) {
    this.tabNumber = [...this.tabNumber, value.toString()];
  }

  addSymbol(symbol: string) {
    if (!this.tabNumber[this.tabNumber.length-1].match(/[X+\-/%]/)) {
      this.tabNumber = [...this.tabNumber, symbol];
    } else {
      this.tabNumber.pop();
      this.tabNumber = [...this.tabNumber, symbol];
    }
  }

  resultaCalcule() {
    // let input = this.tabNumber.join('')
    let input = "475X12"
    let result = input.match('/(\d+)([X+\-/%])(\d+)/');
    if (result) {
      console.log("tata", result[1]);
    } else {
      console.log("toto", result);  
    }
  }

  onDelete() {
    this.tabNumber = [];
  }
}
