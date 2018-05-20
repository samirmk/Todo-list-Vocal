import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDesChosesComponent } from './list-des-choses.component';

describe('ListDesChosesComponent', () => {
  let component: ListDesChosesComponent;
  let fixture: ComponentFixture<ListDesChosesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDesChosesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDesChosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
