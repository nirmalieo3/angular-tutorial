import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ProfileComponent } from './component/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component:HomepageComponent
  },
  {
    path: 'Profile',
    pathMatch: 'full',
    component: ProfileComponent
  },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}