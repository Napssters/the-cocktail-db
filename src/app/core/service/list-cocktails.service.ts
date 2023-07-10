import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drink, Drinks } from '../interfaces/drink.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListCocktailsService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  //Search cocktail by name
  searchByOneLetter(term: string): Observable<Drinks> {
    const url = this.apiUrl + 'search.php?f=' + term;
    return this.http.get<Drinks>(url);
  }

  //List all cocktails by first letter
  searchByLetter(term: string): Observable<Drinks> {
    const url = this.apiUrl + 'search.php?s=' + term;
    return this.http.get<Drinks>(url);
  }

  //Lookup full cocktail details by id
  searchById(term: string): Observable<Drinks> {
    const url = this.apiUrl + 'lookup.php?i=' + term;
    return this.http.get<Drinks>(url);
  }

  //Lookup a random cocktail
  listRandom(): Observable<Drinks> {
    const url = this.apiUrl + 'random.php';
    return this.http.get<Drinks>(url);
  }

  //Lookup a selection of 10 random cocktails
  listRandomSelection(): Observable<Drinks> {
    const url = this.apiUrl + 'randomselection.php';
    return this.http.get<Drinks>(url);
  }

  //List Popular cocktails
  listPopular(): Observable<Drinks> {
    const url = this.apiUrl + 'popular.php';
    return this.http.get<Drinks>(url);
  }

  //List most latest cocktails
  listLatest(): Observable<Drinks> {
    const url = this.apiUrl + 'latest.php';
    return this.http.get<Drinks>(url);
  }

}
