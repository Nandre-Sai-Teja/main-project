import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample1ComponentComponent } from './sample1-component.component';

describe('Sample1ComponentComponent', () => {
  let component: Sample1ComponentComponent;
  let fixture: ComponentFixture<Sample1ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sample1ComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sample1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
