import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairdetailsComponent } from './fairdetails.component';

describe('FairdetailsComponent', () => {
  let component: FairdetailsComponent;
  let fixture: ComponentFixture<FairdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
