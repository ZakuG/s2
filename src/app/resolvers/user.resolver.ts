import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service'; // ajusta la ruta
import { User } from '../models/user.model'; // si tienes un modelo de usuario

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<User> {
  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    const id = route.params['id'];
    return this.userService.getUserById(id);
  }
}
