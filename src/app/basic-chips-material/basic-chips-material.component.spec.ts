import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicChipsMaterialComponent } from './basic-chips-material.component';

describe('BasicChipsMaterialComponent', () => {
  let component: BasicChipsMaterialComponent;
  let fixture: ComponentFixture<BasicChipsMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicChipsMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicChipsMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
