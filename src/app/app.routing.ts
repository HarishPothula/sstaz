import { Routes } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {LayoutComponent} from './layout/layout.component';
import {AuthGuard} from './auth.guard';
import {LoginComponent} from './login/login.component';
export const appRoutes: Routes = [
      {path: '', component: LayoutComponent},
      {path: 'login', component: LoginComponent},
      {path: 'admin', canActivate: [AuthGuard], component: AdminComponent}
];
