import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiefPatronsComponent } from './chief-patrons.component';

describe('ChiefPatronsComponent', () => {
  let component: ChiefPatronsComponent;
  let fixture: ComponentFixture<ChiefPatronsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChiefPatronsComponent]
    });
    fixture = TestBed.createComponent(ChiefPatronsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
