import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  animations: [
    trigger('slideAnimation', [
      state(
        'left',
        style({
          transform: 'translateX(0)',
        })
      ),
      state(
        'right',
        style({
          transform: 'translateX(0)',
        })
      ),
      transition('left => right', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-out'),
      ]),
      transition('right => left', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-out'),
      ]),
    ]),
  ],
})
export class SigninComponent {
  signInForm!: FormGroup;
  signUpForm!: FormGroup;
  isModalOpen: boolean = false;
  isSignUp: boolean = false;

  socialProviders = [
    { name: 'Google', icon: 'Google.SVG', index: 0 },
    { name: 'Microsoft', icon: 'Microsoft.SVG', index: 1 },
    { name: 'Facebook', icon: 'Facebook.SVG', index: 2 },
    { name: 'GitHub', icon: 'GitHub.SVG', index: 3 },
  ];

  get currentForm(): FormGroup {
    return this.isSignUp ? this.signUpForm : this.signInForm;
  }

  constructor(private fb: FormBuilder) {
    this.initializeForms();
  }

  ngOnInit(): void {
    this.signUpForm.get('confirmPassword')?.valueChanges.subscribe(() => {
      this.validatePasswords();
    });
  }

  private initializeForms(): void {
    this.signInForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.signUpForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  private validatePasswords(): void {
    const password = this.signUpForm.get('password')?.value;
    const confirmPassword = this.signUpForm.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      this.signUpForm
        .get('confirmPassword')
        ?.setErrors({ passwordMismatch: true });
    } else {
      this.signUpForm.get('confirmPassword')?.setErrors(null);
    }
  }

  openModal(): void {
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalOpen = false;
    document.body.style.overflow = 'auto';
  }

  toggleSignUp(event: Event): void {
    event.preventDefault();
    this.isSignUp = !this.isSignUp;
    this.currentForm.reset();
  }

  onSubmit(): void {
    if (this.currentForm.valid) {
      console.log(
        `${this.isSignUp ? 'Sign Up' : 'Sign In'} Form Data:`,
        this.currentForm.value
      );
      this.closeModal();
    } else {
      this.markFormTouched(this.currentForm);
    }
  }

  private markFormTouched(form: FormGroup): void {
    Object.values(form.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormTouched(control);
      }
    });
  }

  signInWithProvider(provider: string): void {
    console.log(`Signing in with ${provider}`);
    // Implement provider-specific authentication logic here
  }
}
