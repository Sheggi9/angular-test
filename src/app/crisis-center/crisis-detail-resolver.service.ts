import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router'
import { Crisis } from './mock-crisis'
import { CrisisService } from './crisis.service'
import { Observable, of, EMPTY  } from 'rxjs'
import { mergeMap, take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class CrisisDetailResolverService implements Resolve<Crisis> {
  constructor(private cs: CrisisService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> | Observable<never> {
    const id = route.paramMap.get('id');

    return this.cs.getCrisisById(id).pipe(
      take(1),
      mergeMap(crisis => {
        if (crisis) {
          console.log('resolver', crisis)
          return of(crisis);
        } else { // id not found
          this.router.navigate(['/crisis-center']);
          return EMPTY;
        }
      })
    );
  }
}
