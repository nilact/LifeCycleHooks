import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { SimpleComponent } from './others/simple.component';
import { CrisisListComponentComponent } from './crisis-list-component/crisis-list-component.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    CrisisListComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
