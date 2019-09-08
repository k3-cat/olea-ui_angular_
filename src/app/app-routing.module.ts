import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjComponent } from './proj/proj.component';
import { ProjDetailComponent } from './proj-detail/proj-detail.component';
import { PinkComponent } from './pink/pink.component';
import { PinkDetailComponent } from './pink-detail/pink-detail.component';
import { ConfigComponent } from './config/config.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component'
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  { path: 'projs', component: ProjComponent },
  { path: 'projs/:id', component: ProjDetailComponent },
  { path: 'pinks', component: PinkComponent },
  { path: 'pinks/:id', component: PinkDetailComponent },
  { path: 'user', component: UserComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:returnUrl', component: LoginComponent },
  { path: '', redirectTo: '/projs', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
