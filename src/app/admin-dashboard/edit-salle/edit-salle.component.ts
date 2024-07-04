import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalleService } from '../../services/salle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-salle',
  templateUrl: './edit-salle.component.html',
  styleUrls: ['./edit-salle.component.css'],
})
export class EditSalleComponent implements OnInit {
  salleForm: FormGroup;
  salleId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private salleService: SalleService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.salleForm = this.fb.group({
      numSalle: [null, [Validators.required, Validators.min(1)]],
      name: ['', Validators.required],
      capacity: [null, [Validators.required, Validators.min(1)]],
      isAvailable: [false],
    });
  }

  ngOnInit(): void {
    this.salleId = this.route.snapshot.paramMap.get('id');
    if (this.salleId) {
      this.salleService.getSalleById(this.salleId).subscribe((salle: any) => {
        this.salleForm.setValue({
          numSalle: salle.numSalle,
          name: salle.name,
          capacity: salle.capacity,
          isAvailable: salle.isAvailable,
        });
      });
    }
  }

  onSubmit(): void {
    if (this.salleForm.valid && this.salleId) {
      this.salleService
        .updateSalle(this.salleId, this.salleForm.value)
        .subscribe(() => {
          this.router.navigate(['/admin-dashboard/salles']);
        });
    }
  }
}
