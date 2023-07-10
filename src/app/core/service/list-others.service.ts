import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListIngredients } from '../interfaces/list-ingredients.interfaceface';
import { ListAlcoholics } from '../interfaces/list-alcoholics.interfaceface';
import { ListGlasses } from '../interfaces/list-glasses.interfaceface';
import { ListCategories } from '../interfaces/list-categories.interfaceface';

@Injectable({
  providedIn: 'root'
})
export class ListOthersService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  //List the categories
  listCategory(): Observable<ListCategories> {
    const url = this.apiUrl + 'list.php?c=list';
    return this.http.get<ListCategories>(url);
  }

  //List the glasses
  listGlass(): Observable<ListGlasses> {
    const url = this.apiUrl + 'list.php?g=list';
    return this.http.get<ListGlasses>(url);
  }

  //List the ingredients 
  listIngredient(): Observable<ListIngredients> {
    const url = this.apiUrl + 'list.php?i=list';
    return this.http.get<ListIngredients>(url);
  }

  //List the alcoholic 
  listAlcoholic(): Observable<ListAlcoholics> {
    const url = this.apiUrl + 'list.php?a=list';
    return this.http.get<ListAlcoholics>(url);
  }
}
 