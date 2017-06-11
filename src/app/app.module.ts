// should only have one BrowserModule across your entire application, so you should import CommonModule for child modules.
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {appRouting} from './app.routing';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';

/** AboutModule was removed from imports to prevent auto-loading, so we could use lazy loading.*/
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    appRouting,
    BrowserModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
