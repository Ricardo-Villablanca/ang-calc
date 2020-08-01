import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  display: Observable<string>;


  addToDisplay(value)
  {
    if(value==='C')
    {
      return this.display = of('');
    }

    this.display = (this.display)? of(`${this.display}${value}`): of(`${value}`);

  }
}
