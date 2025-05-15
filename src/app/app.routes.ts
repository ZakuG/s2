import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { PerfilComponent } from './auth/perfil/perfil.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [
    {path:'', component: HomeComponent, title:'Home Page'},
    {path: 'details/:id', component:DetailsComponent, title:'Home'},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, //cambiar entre AuthGuard o AuthGuardFn dependiendo de cual se quiera usar
    { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'login' }
];

// Se declara qué rutas requieren autenticación (o permisos) antes de ser accedidas.
// También podrías usar canLoad si quieres proteger módulos cargados bajo demanda (lazy loading).


