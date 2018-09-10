import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgxSpinnerModule } from './ngx-spinner/ngx-spinner.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
