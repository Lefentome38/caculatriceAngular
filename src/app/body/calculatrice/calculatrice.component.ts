import { Component, OnInit } from '@angular/core';
import { ScreenCalculatorComponent } from '../screen-calculator/screen-calculator.component';
import { evaluate} from 'mathjs';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-calculatrice',
  imports: [ScreenCalculatorComponent, NgStyle],
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.scss'
})

export class CalculatriceComponent implements OnInit {

  keypadTab = Array.from({ length: 9 }, (_,i) => i);

  isLedOnOff = false;

  valueSymbol!: string;
  tabNumber: string [] = [];

  ngOnInit(): void {
    this.tabNumber = [];
  }

  toggleLed() {
    this.isLedOnOff = !this.isLedOnOff;
    this.tabNumber = [];
  }

  onNumberClick(value: number): void {
    if (this.isLedOnOff) {
      this.tabNumber = [...this.tabNumber, value.toString()];
    }
  }

  addSymbol(symbol: string): void {
    if (this.isLedOnOff) {
      if (!this.tabNumber[this.tabNumber.length-1].match(/[X+\-/%]/)) {
        this.tabNumber = [...this.tabNumber, symbol];
      } else {
        this.tabNumber.pop();
        this.tabNumber = [...this.tabNumber, symbol];
      }
    }
  }

  resultaCalcule(): void {
    let input = this.tabNumber.join('')
    let regex = /\d+|[X+\-\/]/g; 
    let match = input.matchAll(regex);

    try {
      if (match) {
        let result = [];
        for (let i of match) {
          result.push(i[0]); 
        }
        let cal = new CalculatriceComponent();
        this.tabNumber = [cal.CalculExpression(result).toString()];
      } else {
        console.log("erreur de calcul dans la valeur rentré de resultaCalcule()");  
      }
    } catch (error) {
      console.log("crash dans le trycatch de resultaCalcule() :", Error);
    }
  }

  CalculExpression(value: string[]): number {
    let expression = value.map(token => token === "X" ? "*" : token).join("");
    try {
      return evaluate(expression);
    } catch (error) {
      console.log("erreur de calcul dans l'expression :", Error);
      return NaN;
    }
  }

  backtrachingBord(): void {
    this.tabNumber.pop();
  }

  onDelete() {
    this.tabNumber = [];
  }
}
