import { Component, OnInit, Input } from '@angular/core';
export interface IRowData {
  projectId: string | number,
  employeeId: string | number,
  hours: number
}
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.sass']
})
export class AddEmployeeComponent implements OnInit {
  tableData: Array<IRowData> = [
    { projectId:'Copses',
      employeeId:'Project Manager',
      hours:6
    },
    { projectId:'Mifort Courses',
      employeeId:'HR Manager',
      hours:1
    },
    { projectId:'Office',
      employeeId:'Admin',
      hours:2
    },
    { projectId:'Copses',
      employeeId:'Owner',
      hours:4
    },
    { projectId:'Office',
      employeeId:'Employee',
      hours:13
    }
  ];

  removeItem(index) {
    this.tableData.splice(index,1);
  }
  addItem(option){
    this.tableData.push({
      projectId:option,
      employeeId:option,
      hours:0})
  }
  lable: string ='Projects: ';
  ngOnInit() {
  }

}
