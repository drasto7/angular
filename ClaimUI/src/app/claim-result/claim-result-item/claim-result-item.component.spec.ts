import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimResultItemComponent } from './claim-result-item.component';

describe('ClaimResultItemComponent', () => {
  let component: ClaimResultItemComponent;
  let fixture: ComponentFixture<ClaimResultItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimResultItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimResultItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
