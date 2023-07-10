import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllCocktailsComponent } from './list-all-cocktails.component';

describe('ListAllCocktailsComponent', () => {
  let component: ListAllCocktailsComponent;
  let fixture: ComponentFixture<ListAllCocktailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllCocktailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
