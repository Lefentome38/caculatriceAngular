import { Component, OnInit } from '@angular/core';
import { ScreenCalculatorComponent } from '../screen-calculator/screen-calculator.component';
import { NgStyle } from '@angular/common';
import { CalculExpression } from '../../functions/math';

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
    let match = input.matchAll(/\d+|[+\-*/]/g);

    try {
      if (match) {
        let newTab: string[] = [];
        for (let i of match) {
          newTab.push(i[0]); 
        }
        let calcul = CalculExpression(this.tabNumber);
        if (!isNaN(calcul)) {
          this.tabNumber = [calcul.toString()];
        } else {
          console.log("Erreur : CalculExpression a retourné une valeur non valide.");
        }
      } else {
        console.log("Erreur de calcul : expression invalide.");  
      }
    } catch (error) {
      console.log("crash dans le trycatch de resultaCalcule() :", error);
    }
  }

  backtrachingBord(): void {
    this.tabNumber.pop();
  }

  onDelete() {
    this.tabNumber = [];
  }
}
