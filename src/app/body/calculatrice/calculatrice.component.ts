import { Component, OnInit } from '@angular/core';
import { ScreenCalculatorComponent } from '../screen-calculator/screen-calculator.component';
import { KeyCalculatorComponent } from "../key-calculator/key-calculator.component";

@Component({
  selector: 'app-calculatrice',
  imports: [ScreenCalculatorComponent, KeyCalculatorComponent],
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.scss'
})

export class CalculatriceComponent implements OnInit {

  tilte!: string;
  items = Array.from({ length: 9 }, (_, i) => i);

  ngOnInit(): void {
    this.tilte = "Calcultratice"
  }
}
