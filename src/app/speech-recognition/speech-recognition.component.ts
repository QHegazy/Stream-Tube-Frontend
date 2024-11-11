import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  ElementRef,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  AfterContentInit,
  AfterViewInit,
} from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
declare global {
  interface Window {
    SpeechRecognition: typeof webkitSpeechRecognition;
    webkitSpeechRecognition: typeof webkitSpeechRecognition;
  }
}

declare var webkitSpeechRecognition: any;
@Component({
  selector: 'app-speech-recognition',
  standalone: true,
  imports: [],
  templateUrl: './speech-recognition.component.html',
  styleUrl: './speech-recognition.component.scss',
})
export class SpeechRecognitionComponent implements OnInit, AfterViewInit {
  recognition: any;
  transcript = '';
  timeoutId: any;
  isListening = false;
  startRecognition = true;
  stopClickRecognation = false;
  @ViewChild('closeModel4') closeModel4!: ElementRef;
  @ViewChild('modal4') modal4!: ElementRef;
  @Input({ alias: 'switch', required: true }) switch: boolean = false;
  @Output('closed') closed: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}
  ngAfterViewInit(): void {
    this.modal4.nativeElement.click();
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeSpeechRecognition();
    }
  }

  private initializeSpeechRecognition(): void {
    const SpeechRecognition =
      window.SpeechRecognition || webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.error('Speech Recognition not supported in this browser.');
      return;
    }

    this.recognition = new SpeechRecognition();
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.recognition.addEventListener('result', this.onSpeechResult.bind(this));
    this.recognition.addEventListener('end', this.onSpeechEnd.bind(this));
    this.recognition.addEventListener('error', this.onSpeechError.bind(this));
    this.recognition.addEventListener('start', this.onSpeechStart.bind(this));
    this.startListening();
  }
  private onSpeechResult(event: any): void {
    this.transcript = Array.from(event.results)
      .map((result: any) => result[0].transcript)
      .join('');
    console.log(this.transcript);
  }
  private onSpeechEnd(): void {
    this.close();
    this.startRecognition = false;
  }

  private onSpeechError(event: any): void {
    console.error('Speech Recognition error:', event.error);
  }

  private onSpeechStart(): void {
    this.startRecognition = true;
  }
  startListening(): void {
    if (this.recognition) {
      this.recognition.start();
    }
  }

  stopListening(): void {
    if (this.recognition) {
      this.recognition.stop();
    }
  }
  startListeningButton() {
    this.isListening = !this.isListening;
    this.startListening();
  }

  stopListeningButton() {
    this.transcript = '';
    console.log('stop' + this.isListening);
    this.stopClickRecognation = true;
    this.isListening = !this.isListening;
    this.stopListening();
    this.cancelClose();
  }

  closeModel() {
    this.closed.emit(true);
  }
  ngOnDestroy(): void {
    this.stopListening();
    if (this.recognition) {
      this.removeEventListeners();
      this.recognition = null;
    }
  }

  close(): void {
    this.timeoutId = setTimeout(() => {
      this.closeModel4.nativeElement.click();
    }, 1500);
  }

  cancelClose(retries: number = 5): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    } else if (retries > 0) {
      setTimeout(() => {
        console.log('call' + retries);
        this.cancelClose(retries - 1);
      }, 100);
    }
  }

  removeEventListeners(): void {
    this.recognition.removeEventListener('result', this.onSpeechResult);
    this.recognition.removeEventListener('end', this.onSpeechEnd);
    this.recognition.removeEventListener('error', this.onSpeechError);
    this.recognition.removeEventListener('start', this.onSpeechStart);
  }
}
