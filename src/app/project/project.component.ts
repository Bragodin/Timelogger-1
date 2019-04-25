import { Component, OnInit } from '@angular/core';
export interface IRowData {
  projectId: string | number,
  employeeId: string | number,
  hours: number
}
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit {
  tableData: Array<IRowData> = [
    { projectId:'Mifort',
      employeeId:'HR',
      hours:6
    },
    { projectId:'Mifort',
      employeeId:'HR',
      hours:1
    },
    { projectId:'Mifort',
      employeeId:'HR',
      hours:2
    },
    { projectId:'Cource',
      employeeId:'HR',
      hours:4
    },
    { projectId:'Mifort',
      employeeId:'Office',
      hours:13
    }
  ];

  removeItem(index) {
    this.tableData.splice(index,1);
  }
  constructor() { }

  ngOnInit() {
  }

}
