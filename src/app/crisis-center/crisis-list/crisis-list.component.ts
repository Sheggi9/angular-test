import { Component, OnInit } from '@angular/core'
import { CrisisService } from '../crisis.service'
import { Crisis } from '../mock-crisis'
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-hero-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {

  constructor(
    private crisisService: CrisisService,
    private route: ActivatedRoute
  ) {}

  crisis$: Observable<Crisis[]>;
  selectedId: number;

  ngOnInit() {
    this.crisis$ = this.crisis$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.crisisService.getCrisis();
      })
    );
  }
}
