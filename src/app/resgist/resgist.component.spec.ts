import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgistComponent } from './resgist.component';

describe('ResgistComponent', () => {
  let component: ResgistComponent;
  let fixture: ComponentFixture<ResgistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResgistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResgistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
