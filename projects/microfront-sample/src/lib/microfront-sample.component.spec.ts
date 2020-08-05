import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrofrontSampleComponent } from './microfront-sample.component';

describe('MicrofrontSampleComponent', () => {
  let component: MicrofrontSampleComponent;
  let fixture: ComponentFixture<MicrofrontSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrofrontSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrofrontSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
