import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: false
})
export class DashboardComponent {
  usuario = localStorage.getItem('username') || 'Invitado';
  constructor(private router: Router, private authService: AuthService) {}

  perfil() {
    this.router.navigate(['/perfil']);
  }
  logout() {
    this.authService.logout()
    window.location.href = '/login';
}

}
