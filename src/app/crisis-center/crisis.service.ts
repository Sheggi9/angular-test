import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { CRISES, Crisis } from './mock-crisis'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CrisisService {

  constructor(
  ) { }

  getCrisis(): Observable<Crisis[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(CRISES);
  }

  getCrisisById(id: number | string) {
    return this.getCrisis().pipe(
      map((heroes: Crisis[]) => heroes.find(hero => hero.id === +id))
    );
  }
}
