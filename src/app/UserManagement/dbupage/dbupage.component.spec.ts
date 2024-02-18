import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBUpageComponent } from './dbupage.component';

describe('DBUpageComponent', () => {
  let component: DBUpageComponent;
  let fixture: ComponentFixture<DBUpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DBUpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DBUpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
