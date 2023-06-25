import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './compnents/form/form.component';

import { NavbarComponent } from './compnents/navbar/navbar.component';


const routes: Routes = [
  {path:'kj', component:FormComponent},
  {path:'l',component:NavbarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
