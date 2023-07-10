import { Component, OnInit  } from '@angular/core';
import { ListOthersService } from 'src/app/core/service/list-others.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-random-ingredients',
  templateUrl: './random-ingredients.component.html',
  styleUrls: ['./random-ingredients.component.sass']
})
export class RandomIngredientsComponent implements OnInit {

  dataIngredients: any[] = [];

  positionText = 2;
  topic = 'Random Ingredients';
  color = '';
  numColor = 1;
  startPosition = 0;
  endPosition = 0;

  constructor (private listOthersService: ListOthersService) { }

  ngOnInit(): void {
    this.getDatainical();
  }

  getDatainical(): void {
    this.listOthersService.listIngredient().subscribe({
      next:(response) =>{
        this.dataIngredients = response.drinks;
        const minLength = 8;
        const maxLength = this.dataIngredients.length - 9;

        this.startPosition = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
        this.endPosition = this.startPosition + 8;
      }, error: (error) =>{
      }
    })
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

