import { HeroesListComponent } from './component/heroes-list/heroes-list.component';
import { GetinfoComponent } from './component/getinfo/getinfo.component';
import { FlexLayoutComponent } from './component/flex-layout/flex-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SuperheroComponent } from './component/superhero/superhero.component';
import { ParentComponent } from './parent/parent.component';
import {ReactiveFormComponent} from './component/reactive-form/reactive-form.component';
import {ReactiveForms2Component} from './component/reactive-forms2/reactive-forms2.component';
import { InformaticaComponent } from './component/informatica/informatica.component';
import { LocalStorageComponent } from './component/local-storage/local-storage.component';
import { CrudRequestsComponent } from './component/crud-requests/crud-requests.component';

const routes: Routes = [
 {path:'', redirectTo: 'home',pathMatch:'full'},
 {path:'home', component: HomepageComponent },
 {path:'profile', component: ProfileComponent },
 {path:'flexlayout', component: FlexLayoutComponent },
 {path:'getinfo', component: GetinfoComponent },
 {path:'heroes', component: HeroesListComponent },
 {path:'superhero', component: SuperheroComponent },
 {path:'parent', component: ParentComponent },
 {path:'reactiveForm', component:  ReactiveFormComponent},
 {path:'reactiveForms2', component:  ReactiveForms2Component},
 {path:'informatica', component:  InformaticaComponent},
 {path:'localstorage', component:  LocalStorageComponent},
 {path:'crudRequests', component: CrudRequestsComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}