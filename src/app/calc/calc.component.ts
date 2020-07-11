import { Component, OnInit } from '@angular/core';
import { ButtonNComponent } from '../button-n/button-n.component';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  display: String;

  addToDisplay(value)
  {
    if(value==='C')
    {
      return this.display = '';
    }

    this.display = (this.display)? `${this.display}${value}`: `${value}`;
  }
}
