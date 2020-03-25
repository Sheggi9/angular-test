import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'


const routes: Routes = [
  {path: '', component: HeroListComponent, data: { animation: 'heroes' }},
  {path: ':id', component: HeroDetailComponent, data: { animation: 'hero' }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
