import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tooltipMaterialComponent } from './tooltip-material.component';

describe('TooltipMaterialComponent', () => {
  let component: tooltipMaterialComponent;
  let fixture: ComponentFixture<tooltipMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tooltipMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(tooltipMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
