import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalCommitteeComponent } from './technical-committee.component';

describe('TechnicalCommitteeComponent', () => {
  let component: TechnicalCommitteeComponent;
  let fixture: ComponentFixture<TechnicalCommitteeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicalCommitteeComponent]
    });
    fixture = TestBed.createComponent(TechnicalCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
