import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechRecognitionComponent } from './SpeechRecognitionComponent';

describe('SpeechRecognitionComponent', () => {
  let component: SpeechRecognitionComponent;
  let fixture: ComponentFixture<SpeechRecognitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeechRecognitionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpeechRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
