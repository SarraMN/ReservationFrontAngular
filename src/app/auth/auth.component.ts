import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  loginForm: FormGroup;
  submitted = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    console.log('testing submit');
    this.submitted = true;
    this.errorMessage = ''; // Clear previous error message

    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.loginForm.value).subscribe(
      (response: any) => {
        const user = response.user;
        localStorage.setItem('token', response.token);
        localStorage.setItem('isAdmin', user.isAdmin);
        localStorage.setItem('userId', user._id);
        console.log(user.id);

        if (user.isAdmin) {
          this.router.navigate(['/admin-dashboard']); // Rediriger les admins vers le tableau de bord admin
        } else {
          this.router.navigate(['/user-dashboard/meeting-rooms']); // Rediriger les autres utilisateurs vers les salles de réunion
        }
      },
      (error: any) => {
        console.error(error);
        if (error.status === 404) {
          this.errorMessage = 'Utilisateur non trouvé.';
        } else if (error.status === 401) {
          this.errorMessage = 'Identifiants invalides.';
        } else {
          this.errorMessage = 'Une erreur est survenue.';
        }
      }
    );
  }
}
