import { Component } from '@angular/core';
import { HeaderComponent } from "./menu/header/header.component";
import { CalculatriceComponent } from "./body/calculatrice/calculatrice.component";
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CalculatriceComponent, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  
}
