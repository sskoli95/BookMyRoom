import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerPanelComponent } from './owner-panel.component';

describe('OwnerPanelComponent', () => {
  let component: OwnerPanelComponent;
  let fixture: ComponentFixture<OwnerPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
