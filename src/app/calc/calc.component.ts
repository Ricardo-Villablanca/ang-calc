import { Component, OnInit } from '@angular/core';
import { ButtonNComponent } from '../button-n/button-n.component';
import { DisplayComponent } from '../display/display.component';
import { ResultsService } from '../results.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  constructor( private resultsService: ResultsService ) { }

  results: Observable<any>;

  ngOnInit(): void {
    this.results = this.resultsService.get();
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
