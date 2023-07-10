import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { ListCocktailsService } from 'src/app/core/service/list-cocktails.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.sass']
})
export class CocktailDetailComponent implements OnInit {

  dataCocktail: any;
  ingredients: any[] = [];
  
  color = '';
  numColor = 2;

  constructor(
      private activatedRoute: ActivatedRoute, 
      private listCocktailsService: ListCocktailsService
    ) { }

  ngOnInit() {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.listCocktailsService.searchById(id)),
      tap(),
    )
    .subscribe(resp => {
      this.dataCocktail = resp.drinks[0];
      this.getIngredients();
    })
  }

  getIngredients() {
    for (let i = 1; i <= 15; i++) {
      const ingredient = this.dataCocktail['strIngredient' + i];
      const measure = this.dataCocktail['strMeasure' + i] !== null ? this.dataCocktail['strMeasure' + i] : '';
      if (ingredient) {
        this.ingredients.push({
          strIngredient: ingredient,
          strMeasure: measure
        });
      }
    }
  }

  getIngredientImage(ingredient: string) {
    console.log(ingredient);
    
    if(this.numColor === 1) {
      this.numColor = 2;
      this.color = 'rgb(219, 182, 161)';
    } else {
      this.numColor = 1;
      this.color = 'rgb(197, 219, 161)';
    }
    return environment.apiIngredientImage + ingredient + '.png';
  }

}
