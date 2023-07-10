import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CommonModule } from '@angular/common';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';
import { CocktailsAllComponent } from './cocktails-all/cocktails-all.component';
import { ListAllCocktailsComponent } from './list-all-cocktails/list-all-cocktails.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'inicio', 
        component: LandingPageComponent,
      },
      {
        path: 'detalle/:id', 
        component: CocktailDetailComponent,
      },
      {
        path: 'cocktails/name/:term', 
        component: CocktailsAllComponent,
      },
      {
        path: 'cocktails/letter/:term', 
        component: CocktailsAllComponent,
      },
      {
        path: 'cocktails/all', 
        component: ListAllCocktailsComponent,
      },
      {
        path: '**',
        redirectTo: 'inicio'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    CommonModule],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
