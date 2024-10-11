import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntraPage } from './entra.page';

describe('EntraPage', () => {
  let component: EntraPage;
  let fixture: ComponentFixture<EntraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EntraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
