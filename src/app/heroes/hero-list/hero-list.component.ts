import { Component, OnInit } from '@angular/core'
import { HeroService } from '../hero.service'
import { Hero } from '../mock-heroes'
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}

  heroes$: Observable<Hero[]>;
  selectedId: number;

  ngOnInit() {
    this.heroes$ = this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.heroService.getHeroes();
      })
    );
  }
}
