import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EquiposComponent } from './components/equipos/equipos.component';

const routes: Routes = [
  {
    path: 'equipos',
    component: EquiposComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
