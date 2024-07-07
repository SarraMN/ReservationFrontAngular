import { Component, OnInit } from '@angular/core';
import { SalleService } from '../../services/salle.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.css'],
})
export class SallesComponent implements OnInit {
  salles: any[] = [];

  constructor(
    private salleService: SalleService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getSalles();
  }

  getSalles(): void {
    this.salleService.getSalles().subscribe((data: any) => {
      this.salles = data;
    });
  }

  navigateToAddSalle(): void {
    this.router.navigate(['/admin-dashboard/add-salle']);
  }

  navigateToEditSalle(id: string): void {
    this.router.navigate(['/admin-dashboard/edit-salle', id]);
  }

  deleteSalle(id: string): void {
    this.salleService.deleteSalle(id).subscribe(() => {
      this.salles = this.salles.filter((s) => s._id !== id);
      this.toastr.success(
        'La salle a été supprimée avec succès',
        'Suppression réussie'
      );
    });
  }
}
