import { FlexLayoutComponent } from './component/flex-layout/flex-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ProfileComponent } from './component/profile/profile.component';
const routes: Routes = [
 {path:'', redirectTo: 'home',pathMatch:'full'},
 {path:'home', component: HomepageComponent },
 {path:'profile', component: ProfileComponent },
 {path:'flexlayout', component: FlexLayoutComponent },
 
 
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}