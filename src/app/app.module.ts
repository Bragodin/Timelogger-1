import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { CreateProjectComponent } from './create-project/create-project.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SignComponent } from './sign/sign.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule, MatSlideToggleModule } from '@angular/material';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { WorkloadComponent } from './workload/workload.component';
import { ChartsModule } from 'ng2-charts';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { MonthlyWorkloadComponent } from './monthly-workload/monthly-workload.component';
import { TimesheetByWeekComponent } from './timesheet-by-week/timesheet-by-week.component';
import {TimelogComponent} from "./timelog/timelog.component";
import { CompanySettingsComponent } from './company-settings/company-settings.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio'
import {IntegrationsComponent} from './integrations/integrations.component';
import { ApprovalPeriodComponent } from './approval-period/approval-period.component';
import { CommentsComponent } from './comments/comments.component';
import { CompanyPropertiesComponent } from './company-properties/company-properties.component';
import { ContainerComponent } from './container/container.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProjectsComponent,
    CreateProjectComponent,
    SignComponent,
    ResetPasswordComponent,
    EmployeesPageComponent,
    AddEmployeeComponent,
    WorkloadComponent,
    DonutChartComponent,
    BarChartComponent,
    MonthlyWorkloadComponent,
    TimesheetByWeekComponent,
    TimelogComponent,
    CompanySettingsComponent,
    IntegrationsComponent,
    ApprovalPeriodComponent,
    CommentsComponent,
    CompanyPropertiesComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatProgressBarModule,
    MatTableModule,
    MatInputModule,
    ChartsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
