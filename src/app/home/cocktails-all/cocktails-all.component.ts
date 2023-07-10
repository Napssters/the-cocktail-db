import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { ListCocktailsService } from 'src/app/core/service/list-cocktails.service';

@Component({
  selector: 'app-cocktails-all',
  templateUrl: './cocktails-all.component.html',
  styleUrls: ['./cocktails-all.component.sass']
})
export class CocktailsAllComponent implements OnInit {

  dataCocktails: any[] = [];

  positionText = 0;
  topic = 'All Drinks'
  numColor = 2;

  constructor(
    private listCocktailsService: ListCocktailsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap(({ term }) => this.selectSearch(term)),
        tap(),
      )
      .subscribe(resp => {
        this.dataCocktails = resp.drinks;
      })
  }
  
  selectSearch(term: string): Observable<any> {

    let defSearcher = term.split('');

    if (defSearcher.length == 1) {
      this.topic = 'Drinks Bt Letter';
      return this.listCocktailsService.searchByOneLetter(term);
    } else  {
      this.topic = 'Drinks Bt Name';
        return this.listCocktailsService.searchByLetter(term);
    } 
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
