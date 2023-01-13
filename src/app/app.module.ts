import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/app-header/app-header.component';
import { ConceptButtonComponent } from './core/components/concept-button/concept-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConceptButtonComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
