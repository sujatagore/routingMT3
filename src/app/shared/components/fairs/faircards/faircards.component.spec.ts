import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaircardsComponent } from './faircards.component';

describe('FaircardsComponent', () => {
  let component: FaircardsComponent;
  let fixture: ComponentFixture<FaircardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaircardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaircardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
