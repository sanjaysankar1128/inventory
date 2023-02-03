import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListofitemsComponent } from './listofitems/listofitems.component';
import { NewitemsformComponent } from './newitemsform/newitemsform.component';
const routes: Routes = [
  {path:'',component:ListofitemsComponent},
  {path:'newitems',component:NewitemsformComponent},
  {path:'newitems/:data',component:NewitemsformComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
