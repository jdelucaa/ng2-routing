// should only have one BrowserModule across your entire application, so you should import CommonModule for child modules.
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AboutModule} from './about/about.module';
import {AppComponent} from './app.component';
import {appRouting} from './app.routing';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    AboutModule,
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
