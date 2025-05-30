import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}
  
  login() {
    this.authService.login('123456', 'Benja',)
    this.router.navigate(['/dashboard']);;
  }
}
