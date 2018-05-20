import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoVocaleComponent } from './reco-vocale.component';

describe('RecoVocaleComponent', () => {
  let component: RecoVocaleComponent;
  let fixture: ComponentFixture<RecoVocaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoVocaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoVocaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
