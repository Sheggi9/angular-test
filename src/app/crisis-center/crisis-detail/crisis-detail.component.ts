import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { CrisisService } from '../crisis.service'
import { switchMap } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { Crisis } from '../mock-crisis'
import { DialogService } from '../../dialog.service'
// import { Hero } from '../mock-crisis'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {
  crisis: Crisis;
  editName: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crisisService: CrisisService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {

    // or
    // let id = this.route.snapshot.paramMap.get('id');
    // this.hero$ = this.service.getHero(id);

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.crisisService.getCrisisById(params.get('id'))
      )
    ).subscribe(data => {
        this.editName = data.name;
        this.crisis = data;
        console.log('component', this.crisis)
      }
    );
  }
  gotoBack() {
    const crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }

  alertState() {
    console.log(this.crisis.name)
    console.log(this.editName)
  }

  save() {
    this.editName = this.crisis.name;
    this.gotoBack();
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }
}
