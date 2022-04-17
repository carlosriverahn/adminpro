import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RjxsComponent } from './rjxs.component';

describe('RjxsComponent', () => {
  let component: RjxsComponent;
  let fixture: ComponentFixture<RjxsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RjxsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RjxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
