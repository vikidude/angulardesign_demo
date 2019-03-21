import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentinfoComponent } from './storedata/studentinfo/studentinfo.component';
import { UpdateinfoComponent } from './storedata/updateinfo/updateinfo.component';

const routes: Routes = [

{
  path: '',
  component: StudentinfoComponent
},
{
  path : 'updateinfo',
  component : UpdateinfoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
