import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';
import { SignComponent } from './sign/sign.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProjectsComponent } from './projects/projects.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {CompanySettingsComponent} from "./company-settings/company-settings.component";


const itemMenu: Routes = [
  { path: 'create', component: CreateProjectComponent},
  { path: 'employees', component: EmployeesPageComponent},
  { path: 'company-settings', component: CompanySettingsComponent},
  { path: 'employees/add_employee', component: AddEmployeeComponent}
];
const routes: Routes = [
  { path: '', component: ProjectsComponent, children: itemMenu},
  { path: 'sign', component: SignComponent },
  { path: 'reset', component: ResetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
