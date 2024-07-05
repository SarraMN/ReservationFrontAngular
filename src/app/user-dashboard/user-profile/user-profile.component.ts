import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  userId: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.userId = this.getUserIdFromSession();
    this.userService.getUserById(this.userId).subscribe((userData: any) => {
      this.profileForm.patchValue(userData); // Pré-remplit le formulaire avec les données de l'utilisateur
    });
  }

  updateProfile(): void {
    if (this.profileForm.valid) {
      const userData = this.profileForm.value;
      this.userService.updateUser(this.userId, userData).subscribe(() => {
        this.successMessage = 'Profil mis à jour avec succès.';
        this.errorMessage = '';
      }, error => {
        console.error('Error updating profile:', error);
        this.successMessage = '';
        if (error.status === 400) {
          this.errorMessage = error.error.message; // Gère les messages d'erreur du backend ici
        } else {
          this.errorMessage = 'Échec de la mise à jour du profil.';
        }
      });
    } else {
      this.validateAllFormFields(this.profileForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else {
        control!.markAsDirty({ onlySelf: true });
      }
    });
  }

  getUserIdFromSession(): string {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      throw new Error('User ID not found in session');
    }
    return userId;
  }
}
