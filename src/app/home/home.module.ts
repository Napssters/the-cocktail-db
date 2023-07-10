import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PopularDrinksComponent } from './popular-drinks/popular-drinks.component';
import { PopularIngredientsComponent } from './popular-ingredients/popular-ingredients.component';
import { LatestDrinksComponent } from './latest-drinks/latest-drinks.component';
import { RandomIngredientsComponent } from './random-ingredients/random-ingredients.component';
import { RandomDrinksComponent } from './random-drinks/random-drinks.component';
import { SharedModule } from '../shared/shared.module';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';
import { CocktailsAllComponent } from './cocktails-all/cocktails-all.component';
import { ListAllCocktailsComponent } from './list-all-cocktails/list-all-cocktails.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    PopularDrinksComponent,
    PopularIngredientsComponent,
    LatestDrinksComponent,
    RandomIngredientsComponent,
    RandomDrinksComponent,
    CocktailDetailComponent,
    CocktailsAllComponent,
    ListAllCocktailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [
    LandingPageComponent,
  ]
})
export class HomeModule { }
