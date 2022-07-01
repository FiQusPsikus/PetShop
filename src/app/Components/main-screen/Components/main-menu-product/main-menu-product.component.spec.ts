import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuProductComponent } from './main-menu-product.component';

describe('MainMenuProductComponent', () => {
  let component: MainMenuProductComponent;
  let fixture: ComponentFixture<MainMenuProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMenuProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
