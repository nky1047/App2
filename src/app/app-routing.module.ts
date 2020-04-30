import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminComponent } from './admin/admin.component';
import { Admin } from './admin';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';


const routes: Routes = [
  {path:'', redirectTo:'admin',pathMatch:'full'},
  {path: 'admin' ,component: AdminComponent},
  {path:'addAdmin',component:AddAdminComponent},
  {path:'home', component:AdminComponent},
  {path:'update/:id',component:UpdateAdminComponent},
  {path:'details/:id',component:AdminDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
