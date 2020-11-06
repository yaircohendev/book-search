import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-form',
  templateUrl: './welcome-form.component.html',
  styleUrls: ['./welcome-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeFormComponent {
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  constructor(private router: Router) {}

  submitName(): void {
    localStorage.setItem('name', this.nameFormControl.value);
    this.router.navigate(['books']).then((r) => r);
  }
}
