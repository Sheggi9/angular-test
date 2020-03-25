import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { ComposeMessageComponent } from './compose-message/compose-message.component'
import { AuthGuard } from './auth/auth.guard'
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service'

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: 'superheroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    path: 'crisis-center',
    loadChildren: () => import('./crisis-center/crisis.module').then(m => m.CrisisModule),
    data: { preload: true }
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  { path: 'heroes', redirectTo: '/superheroes', pathMatch: 'full' },
  { path: '', redirectTo: '/superheroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // {  preloadingStrategy: PreloadAllModules }
    {  preloadingStrategy: SelectivePreloadingStrategyService }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
