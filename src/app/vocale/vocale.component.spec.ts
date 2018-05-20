import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocaleComponent } from './vocale.component';

describe('VocaleComponent', () => {
  let component: VocaleComponent;
  let fixture: ComponentFixture<VocaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
