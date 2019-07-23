import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusMoveComponent } from './bus-move.component';

describe('BusMoveComponent', () => {
  let component: BusMoveComponent;
  let fixture: ComponentFixture<BusMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
