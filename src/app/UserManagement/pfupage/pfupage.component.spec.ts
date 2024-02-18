import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PFUpageComponent } from './pfupage.component';

describe('PFUpageComponent', () => {
  let component: PFUpageComponent;
  let fixture: ComponentFixture<PFUpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PFUpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PFUpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
