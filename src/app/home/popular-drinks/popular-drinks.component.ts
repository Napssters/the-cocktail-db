import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Drink } from 'src/app/core/interfaces/list-categories.interfaceface';
import { PreviewProducts } from 'src/app/core/interfaces/preview-products.interface';
import { ListCocktailsService } from 'src/app/core/service/list-cocktails.service';

@Component({
  selector: 'app-popular-drinks',
  templateUrl: './popular-drinks.component.html',
  styleUrls: ['./popular-drinks.component.sass']
})
export class PopularDrinksComponent implements OnInit {

  dataCocktails: any[] = [];

  positionText = 0;
  topic = 'Popular Drinks';
  numColor = 2;

  constructor (
      private listCocktailsService: ListCocktailsService,
      private router: Router
    ) { }

  ngOnInit(): void {
    this.getDatainical();
  }

  getDatainical(): void {
    this.listCocktailsService.searchByLetter(this.getRandomLetter()).subscribe({
      next:(respuestaCocktails) =>{
        this.dataCocktails = respuestaCocktails.drinks;
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

  getColor(): string {
    let color = '';
    if(this.numColor === 1) {
      this.numColor = 2;
      color = 'rgb(219, 182, 161)';
    } else {
      this.numColor = 1;
      color = 'rgb(197, 219, 161)';
    }
    return color
  }

  detail(id: number): void{
    this.router.navigate([
      '/home/detalle/', id
    ]);
  }
}
