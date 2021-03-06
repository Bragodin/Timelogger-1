import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RestorePasswordComponent } from './restore-password/restore-password.component';
import { PageComponent } from './page/page.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {CompanySettingsComponent} from "./company-settings/company-settings.component";
import {ProjectComponent} from "./project/project.component";
import {ProfileComponent} from "./profile/profile.component";
import {TimelogComponent} from "./timelog/timelog.component";
import {ProjectNameComponent} from "./project-name/project-name.component";
import { SignInComponent } from  './sign-in/sign-in.component';

import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';

import {CompanyIntegrationComponent} from "./company-integration/company-integration.component";


const itemMenu: Routes = [
  { path: 'timelog-day', component: TimelogComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'projects/create_pro', component: CreateProjectComponent},
  { path: 'projects/:project_name', component: ProjectNameComponent},
  { path: 'projects', component: ProjectComponent},
  { path: 'employees', component: EmployeesPageComponent},
  { path: 'company-settings', component: CompanySettingsComponent},
  { path: 'company-integration', component: CompanyIntegrationComponent},
  { path: 'employees/add_employee', component: AddEmployeeComponent}
];
const routes: Routes = [
  { path: '', component: PageComponent, children: itemMenu},
  { path: 'sign-up', component: SignUpComponent },
  { path: 'set-new-password', component: SetNewPasswordComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'restore-password', component: RestorePasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
