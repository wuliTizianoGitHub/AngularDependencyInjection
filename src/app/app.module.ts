import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component'
import { HeroesComponent } from "./components/hero/heroes.component";
import { HeroListComponent } from "./components/hero/hero-list.component";
// import { HeroService } from "./services/hero/hero.service";
import { TestComponent } from "./components/test/test.component";
import { UserService } from "./services/user.service";
import { InjectorComponent } from "./injector.component";


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    HeroesComponent,
    HeroListComponent,
    TestComponent,
    InjectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
