import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewingCommitteeComponent } from './reviewing-committee.component';

describe('ReviewingCommitteeComponent', () => {
  let component: ReviewingCommitteeComponent;
  let fixture: ComponentFixture<ReviewingCommitteeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewingCommitteeComponent]
    });
    fixture = TestBed.createComponent(ReviewingCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
