import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfomodalComponent } from './userinfomodal.component';

describe('UserinfomodalComponent', () => {
  let component: UserinfomodalComponent;
  let fixture: ComponentFixture<UserinfomodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserinfomodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserinfomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
