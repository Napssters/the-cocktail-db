import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ingredients } from '../interfaces/ingredient.interface';

@Injectable({
  providedIn: 'root'
})
export class ListIngredientsService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  //Search ingredient by name
  searchByName(parametro: string): Observable<Ingredients> {
    const url = this.apiUrl + 'search.php?i=' + parametro;
    return this.http.get<Ingredients>(url);
  }

  //Lookup full cocktail details by id
  searchById(parametro: string): Observable<Ingredients> {
    const url = this.apiUrl + 'lookup.php?iid=' + parametro;
    return this.http.get<Ingredients>(url);
  }
}
