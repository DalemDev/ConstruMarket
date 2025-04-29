import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class CabeceraComponent {
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
