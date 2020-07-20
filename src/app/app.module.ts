import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { NoteAreaComponent } from './note-area/note-area.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {SharedMaterialModule} from './shared-material.module';
import { QuillModule } from 'ngx-quill';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopNavbarComponent,
    NoteAreaComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedMaterialModule,
    BrowserAnimationsModule,
    QuillModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  entryComponents:[LayoutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
