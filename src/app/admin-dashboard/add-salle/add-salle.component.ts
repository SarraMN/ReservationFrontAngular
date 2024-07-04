import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalleService } from '../../services/salle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-salle',
  templateUrl: './add-salle.component.html',
  styleUrls: ['./add-salle.component.css'],
})
export class AddSalleComponent implements OnInit {
  salleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private salleService: SalleService,
    private router: Router
  ) {
    this.salleForm = this.fb.group({
      numSalle: [null, [Validators.required, Validators.min(1)]],
      name: ['', Validators.required],
      capacity: [null, [Validators.required, Validators.min(1)]],
      isAvailable: [false],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.salleForm.valid) {
      this.salleService.addSalle(this.salleForm.value).subscribe(() => {
        this.router.navigate(['/admin-dashboard/salles']);
      });
    }
  }
}
