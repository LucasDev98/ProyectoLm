import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Pages Module
import { ROUTES_PAGES } from './pages/pages-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: ROUTES_PAGES ,canActivate: [AuthGuard]
  },
  {
    path: 'home/', component: HomeComponent
  },
  {
    path:'', component: HomeComponent, canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
