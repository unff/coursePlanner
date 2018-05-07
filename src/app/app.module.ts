import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { CourseBoxComponent } from './course-box/course-box.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseBoxComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
