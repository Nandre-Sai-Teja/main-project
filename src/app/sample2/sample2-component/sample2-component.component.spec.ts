import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample2ComponentComponent } from './sample2-component.component';

describe('Sample2ComponentComponent', () => {
  let component: Sample2ComponentComponent;
  let fixture: ComponentFixture<Sample2ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sample2ComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sample2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
