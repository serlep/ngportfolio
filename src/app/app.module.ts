import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdTooltipModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SidelinkComponent } from './sidelink/sidelink.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    SidelinkComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdTooltipModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAItNe1cVhLupQfShGE4FuIACZImzPfDGU'
    }),
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent

      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
