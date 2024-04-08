import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbapageComponent } from './dbapage.component';

describe('DbapageComponent', () => {
  let component: DbapageComponent;
  let fixture: ComponentFixture<DbapageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbapageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
