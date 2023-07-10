import { Component, OnInit  } from '@angular/core';
import { ListOthersService } from 'src/app/core/service/list-others.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-popular-ingredients',
  templateUrl: './popular-ingredients.component.html',
  styleUrls: ['./popular-ingredients.component.sass']
})
export class PopularIngredientsComponent implements OnInit {

  dataIngredients: any[] = [];

  positionText = 2;
  topic = 'Popular Ingredients';
  color = '';
  numColor = 2;

  constructor (private listOthersService: ListOthersService) { }

  ngOnInit(): void {
    this.getDatainical();
  }

  getDatainical(): void {
    this.listOthersService.listIngredient().subscribe({
      next:(response) =>{
        this.dataIngredients = response.drinks;
      }, error: (error) =>{
      }
    })
  }

  getRandomLetter(): string {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    const randomLetter = alphabet[randomIndex];
    return randomLetter;
  }

  getIngredientImage(ingredient: string) {

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
