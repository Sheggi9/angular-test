import { Component } from '@angular/core';
import { slideInAnimation } from './animations'
import { RouterOutlet } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { State } from './store/store.reducer'
import { setScores } from './store/all.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  count$: Observable<any>;
  title = 'my-test-routing-app';
  constructor(private store: Store<{game: State}>) {
    this.count$ = store.pipe(select('game'));
  }

  getAnimationData(routerOutlet: RouterOutlet) {
    return routerOutlet && routerOutlet.activatedRouteData && routerOutlet.activatedRouteData.animation;
  }

  incHome() {
    this.store.dispatch(setScores({game: {home: 4, away: 2}}))
  }

}
