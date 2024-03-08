import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumBoxesComponent } from './num-boxes.component';

describe('NumBoxesComponent', () => {
  let component: NumBoxesComponent;
  let fixture: ComponentFixture<NumBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumBoxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
