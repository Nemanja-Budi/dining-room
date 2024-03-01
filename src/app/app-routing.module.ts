import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/core/home/home.component';
import { AboutComponent } from './components/core/about/about.component';
import { RestoranListComponent } from './components/core/restoran-list/restoran-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'restaurants', component: RestoranListComponent},
  { path: "restaurants/:id", component: RestoranListComponent },
  { path: "restaurants/:cuisine", component: RestoranListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
