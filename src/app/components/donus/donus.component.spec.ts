import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonusComponent } from './donus.component';

describe('DonusComponent', () => {
  let component: DonusComponent;
  let fixture: ComponentFixture<DonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
