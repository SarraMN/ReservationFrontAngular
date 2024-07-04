import { Component, OnInit } from '@angular/core';
import { SalleService } from '../../services/salle.service';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.css'],
})
export class SallesComponent implements OnInit {
  salles: any[] = [];

  constructor(private salleService: SalleService) {}

  ngOnInit(): void {
    this.getSalles();
  }

  getSalles(): void {
    this.salleService.getSalles().subscribe((data: any) => {
      this.salles = data;
    });
  }

  addSalle(): void {
    const newSalle = {
      numSalle: 101,
      name: 'Salle 101',
      capacity: 10,
      isAvailable: true,
    };
    this.salleService.addSalle(newSalle).subscribe((salle: any) => {
      this.salles.push(salle);
    });
  }

  editSalle(salle: any): void {
    const updatedSalle = { ...salle, name: 'Salle 101 Updated' };
    this.salleService
      .updateSalle(salle._id, updatedSalle)
      .subscribe((data: any) => {
        const index = this.salles.findIndex((s) => s._id === salle._id);
        if (index !== -1) {
          this.salles[index] = data;
        }
      });
  }

  deleteSalle(id: string): void {
    this.salleService.deleteSalle(id).subscribe(() => {
      this.salles = this.salles.filter((s) => s._id !== id);
    });
  }
}
