import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalBasicsComponent } from './modal-basics/modal-basics.component';

@NgModule({
   declarations: [
      AppComponent,
      ModalBasicsComponent
   ],
   imports: [
      NgbModule,
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
