import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnologyCardComponent } from './components/technology-card/technology-card.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TechnologyCardComponent,
    AboutComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    TechnologiesComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
