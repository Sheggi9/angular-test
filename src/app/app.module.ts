import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComposeMessageComponent } from './compose-message/compose-message.component'
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store'
import * as AllReducer from './store/store.reducer';
import { environment } from '../environments/environment'

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  // tslint:disable-next-line:only-arrow-functions
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    AppRoutingModule,
    StoreModule.forRoot({ game: AllReducer.reducer }),
    // this.StoreDevtoolsModule.instrument({
    //   maxAge: 25, // Retains last 25 states
    //   logOnly: environment.production, // Restrict extension to log-only mode
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
