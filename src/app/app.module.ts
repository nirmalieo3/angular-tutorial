import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';

import {MatDialogModule} from '@angular/material/dialog';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ProfileComponent } from './component/profile/profile.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutComponent } from './component/flex-layout/flex-layout.component';
import { StudentService } from './student.service';
import { GetinfoComponent } from './component/getinfo/getinfo.component';
import { HeroesListComponent } from './component/heroes-list/heroes-list.component';
import { HeroesDetailComponent } from './component/heroes-detail/heroes-detail.component';
import { TableComponent } from './component/table/table.component'
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SuperheroComponent } from './component/superhero/superhero.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { ReactiveFormsModule} from '@angular/forms';
import { ReactiveForms2Component } from './component/reactive-forms2/reactive-forms2.component';
import { FormDataComponent } from './component/form-data/form-data.component';
import { InformaticaComponent } from './component/informatica/informatica.component';
import { LocalStorageComponent } from './component/local-storage/local-storage.component';
import { CrudRequestsComponent } from './component/crud-requests/crud-requests.component';
import { SharedService } from './shared.service';
import { NgxUiLoaderConfig, NgxUiLoaderModule, PB_DIRECTION, POSITION, SPINNER } from 'ngx-ui-loader';




const ngxUiLoaderConfig:NgxUiLoaderConfig ={

  
  "fgsColor": "red",
  "fgsPosition": POSITION.centerCenter,
  "fgsSize": 60,
  "fgsType": SPINNER.cubeGrid,
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "red",
  "pbDirection": PB_DIRECTION.leftToRight,
  "pbThickness": 3,
 
}
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProfileComponent,
    DialogComponent,
    FlexLayoutComponent,
    GetinfoComponent,
    HeroesListComponent,
    HeroesDetailComponent,
    TableComponent,
    SuperheroComponent,
    ParentComponent,
    ChildComponent,
    ReactiveFormComponent,
    ReactiveForms2Component,
    FormDataComponent,
    InformaticaComponent,
    LocalStorageComponent,
    CrudRequestsComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatTableModule,
    MatDialogModule,
    FlexLayoutModule ,
    HttpClientModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  providers: [StudentService, SharedService], 
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA] 
})
export class AppModule { }
