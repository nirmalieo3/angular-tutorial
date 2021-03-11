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
import { HeroesDetailComponent } from './component/heroes-detail/heroes-detail.component'
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
    FlexLayoutModule 
  ],
  providers: [StudentService], 
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA] 
})
export class AppModule { }
