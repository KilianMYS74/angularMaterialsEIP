import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsMaterialComponent } from './tabs-material.component';

describe('TabsMaterialComponent', () => {
  let component: TabsMaterialComponent;
  let fixture: ComponentFixture<TabsMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
