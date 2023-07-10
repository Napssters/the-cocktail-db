import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { ListCocktailsService } from 'src/app/core/service/list-cocktails.service';

@Component({
  selector: 'app-list-all-cocktails',
  templateUrl: './list-all-cocktails.component.html',
  styleUrls: ['./list-all-cocktails.component.sass']
})
export class ListAllCocktailsComponent implements OnInit {

  dataCocktails: any[] = [];

  positionText = 0;
  topic = 'All Drinks'
  numColor = 2;

  constructor(
    private listCocktailsService: ListCocktailsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllCocktails();
  }

  getAllCocktails() {
    this.dataCocktails = []; // Limpiar el arreglo de cócteles
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    letters.split('').forEach(letter => {
      this.listCocktailsService.searchByOneLetter(letter).subscribe({
        next: (respuestaCocktails) => {
          this.dataCocktails.push(...respuestaCocktails.drinks);
        }, error: (error) => {
        }
      })
    });
  }


  getColor(): string {
    let color = '';
    if (this.numColor === 1) {
      this.numColor = 2;
      color = 'rgb(219, 182, 161)';
    } else {
      this.numColor = 1;
      color = 'rgb(197, 219, 161)';
    }
    return color
  }

  detail(id: number): void {
    this.router.navigate([
      '/home/detalle/', id
    ]);
  }


}
