import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidelinkComponent } from './sidelink.component';

describe('SidelinkComponent', () => {
  let component: SidelinkComponent;
  let fixture: ComponentFixture<SidelinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidelinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidelinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
