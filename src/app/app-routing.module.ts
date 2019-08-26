import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalBasicsComponent } from './modal-basics/modal-basics.component';

const routes: Routes = [
  {path: 'modal-basic', component: ModalBasicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
