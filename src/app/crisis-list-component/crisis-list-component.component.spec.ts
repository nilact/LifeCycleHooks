import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisListComponentComponent } from './crisis-list-component.component';

describe('CrisisListComponentComponent', () => {
  let component: CrisisListComponentComponent;
  let fixture: ComponentFixture<CrisisListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisisListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
