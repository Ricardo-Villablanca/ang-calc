import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CalcService } from '../calc.service';

@Component({
  selector: 'app-button-n',
  templateUrl: './button-n.component.html',
  styleUrls: ['./button-n.component.scss']
})
export class ButtonNComponent implements OnInit {

  @Input() value: String;
  //@Output('keyPressed') val : String;
  bus = new EventEmitter<String>();

  constructor( private calcService: CalcService ) { }

  ngOnInit(): void {
  }

  pressKey()
  {
    this.bus.emit(this.value);
    //this.calcService.addToDisplay(this.value);
  }

}
