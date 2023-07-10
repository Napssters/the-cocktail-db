import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FilterDrink } from '../interfaces/filter-drink.interface';

@Injectable({
  providedIn: 'root'
})
export class FilterCocktailsService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  //Filter by ingredient
  filterByIngredient(parametro: string): Observable<FilterDrink[]> {
    const url = this.apiUrl + 'filter.php?i=' + parametro;
    return this.http.get<FilterDrink[]>(url);
  }

  //Filter by multi-ingredient
  filterByMultiIngredient(parametro: string): Observable<FilterDrink[]> {
    const url = this.apiUrl + 'filter.php?i=' + parametro;
    return this.http.get<FilterDrink[]>(url);
  }

  //Filter by alcoholic
  filterByAlcholic(parametro: string): Observable<FilterDrink[]> {
    const url = this.apiUrl + 'filter.php?a=' + parametro;
    return this.http.get<FilterDrink[]>(url);
  }

  //Filter by Category
  filterByCategory(parametro: string): Observable<FilterDrink[]> {
    const url = this.apiUrl + 'filter.php?c=' + parametro;
    return this.http.get<FilterDrink[]>(url);
  }

  //Filter by Glass
  filterByGlass(parametro: string): Observable<FilterDrink[]> {
    const url = this.apiUrl + 'filter.php?g=' + parametro;
    return this.http.get<FilterDrink[]>(url);
  }

}
