import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { ListCocktailsService } from 'src/app/core/service/list-cocktails.service';

@Component({
  selector: 'app-latest-drinks',
  templateUrl: './latest-drinks.component.html',
  styleUrls: ['./latest-drinks.component.sass']
})
export class LatestDrinksComponent implements OnInit {

  dataCocktails: any[] = [];

  positionText = 0;
  topic = 'Latest Drinks';
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
