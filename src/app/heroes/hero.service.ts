import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { Hero, HEROES } from './mock-heroes'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    // private messageService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    // this.messageService.add('CrisisService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number | string) {
    return this.getHeroes().pipe(
      // (+) before `id` turns the string into a number
      map((heroes: Hero[]) => heroes.find(hero => hero.id === +id))
    );
  }
}
