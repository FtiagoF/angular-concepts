import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/app-header/app-header.component';
import { ConceptButtonComponent } from './core/components/concept-button/concept-button.component';
import { ConceptArticleComponent } from './core/components/concept-article/concept-article.component';
import { NewConceptFormComponent } from './core/components/new-concept-form/new-concept-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConceptButtonComponent,
    ConceptArticleComponent,
    NewConceptFormComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
