import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ListCategories } from 'src/app/core/interfaces/list-categories.interfaceface';
import { ListOthersService } from 'src/app/core/service/list-others.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements OnInit {

  letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  constructor(
    private router: Router
  ) { }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  listCocktailsLetter(term: string): void{
    this.router.navigate([
      '/home/cocktails/letter/', term
    ]);
  }
  
}
