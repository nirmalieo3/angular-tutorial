import { HeroesListComponent } from './component/heroes-list/heroes-list.component';
import { GetinfoComponent } from './component/getinfo/getinfo.component';
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
 {path:'getinfo', component: GetinfoComponent },
 {path:'heroes', component: HeroesListComponent },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}