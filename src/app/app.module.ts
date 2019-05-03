import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { PageComponent } from './page/page.component';
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
import {MatInputModule, MatNativeDateModule, MatSlideToggleModule} from '@angular/material';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { WorkloadComponent } from './workload/workload.component';
import { ChartsModule } from 'ng2-charts';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { MonthlyWorkloadComponent } from './monthly-workload/monthly-workload.component';
import { TimesheetByWeekComponent } from './timesheet-by-week/timesheet-by-week.component';
import { TimelogComponent } from "./timelog/timelog.component";
import { CompanySettingsComponent } from './company-settings/company-settings.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio'
import { IntegrationsComponent } from './integrations/integrations.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ExportComponent } from './export/export.component'
import { FormsModule } from '@angular/forms';
import { ApprovalPeriodComponent } from './approval-period/approval-period.component';
import { CommentsComponent } from './comments/comments.component';
import { CompanyPropertiesComponent } from './company-properties/company-properties.component';
import { ContainerComponent } from './container/container.component';
import { ProgressComponent } from './progress/progress.component';
import { ProjectComponent } from './project/project.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { LogoUserCompanyComponent } from './logo-user-company/logo-user-company.component';
import { NotificationPreferencesComponent } from './notification-preferences/notification-preferences.component';
import { EmployeeInformationComponent } from './employee-information/employee-information.component';

import { HeadComponent } from './head/head.component';
import { BlockComponent } from './block/block.component';
import { ApproveRejectForgetComponent } from './approve-reject-forget/approve-reject-forget.component';

import { CellComponent } from './table/cell/cell.component';
import { ReactiveFormsModule  } from "@angular/forms";
import { ProjectNameComponent } from './project-name/project-name.component';


@NgModule({
  declarations: [
    CellComponent,
    TableComponent,
    AppComponent,
    ProfileComponent,
    PageComponent,
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
    ExportComponent,
    IntegrationsComponent,
    ApprovalPeriodComponent,
    CommentsComponent,
    CompanyPropertiesComponent,
    ContainerComponent,
    ProgressComponent,
    ProjectComponent,
    SidebarComponent,
    MenuComponent,
    HeaderComponent,
    LogoUserCompanyComponent,
    NotificationPreferencesComponent,
    EmployeeInformationComponent,
    ExportComponent,
    HeadComponent,
    BlockComponent,
    ApproveRejectForgetComponent,
    TableComponent,
    ProjectNameComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatTableModule,
    MatInputModule,
    ChartsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
