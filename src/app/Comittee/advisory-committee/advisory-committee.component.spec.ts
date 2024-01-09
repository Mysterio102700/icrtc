import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryCommitteeComponent } from './advisory-committee.component';

describe('AdvisoryCommitteeComponent', () => {
  let component: AdvisoryCommitteeComponent;
  let fixture: ComponentFixture<AdvisoryCommitteeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvisoryCommitteeComponent]
    });
    fixture = TestBed.createComponent(AdvisoryCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
