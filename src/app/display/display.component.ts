import { Component, OnInit, Input } from '@angular/core';
import { CalcService } from '../calc.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor( private calcService: CalcService ) { }
  @Input() toDisplay;

  ngOnInit(): void {
    /* 
    this.calcService.display.subscribe((display)=>{
      console.log(display)
      this.toDisplay
    }); */
  }
  
}
