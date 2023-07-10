import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {

  constructor(
    private router: Router
  ) { }

  detail(term: string): void{
    this.router.navigate([
      '/home/cocktails/name/', term
    ]);
  }

  
}
