import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent, MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EmpserviceService } from "../empservice.service";
import { emp_class } from './employee.class';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  flag: boolean;
  studnetDataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  pageEvent: PageEvent;
  emp_arr: emp_class[] = []
  constructor(private route: Router, private empservice: EmpserviceService) { }
  displayedColumns: string[] = ['firstName', 'lastName', 'address', 'DOB', 'designation', 'departmentName', "Action1", "Action2"];
  ngOnInit(): void {
    this.flag = true;
    this.empservice.getAllEmployeeData().subscribe((response: any) => {
      console.log(response);
      this.studnetDataSource.paginator = this.paginator;
      this.studnetDataSource.sort = this.sort;
      this.emp_arr = response.data;
      this.studnetDataSource.data = this.emp_arr;
    });
  }
  onAddEmployee(){
    this.route.navigate(['addEmployee']);
  }
  applyFilter(filterValue: string) {
    this.studnetDataSource.filter = filterValue.trim().toLowerCase();
    if (this.studnetDataSource.filteredData.length == 0) {
      this.flag = false;
    }
    else {
      this.flag = true;
    }

  }
  onDelete(id:any) {

console.log(id);
    this.empservice.deleteEmployee(id).subscribe((data:any)=>{
console.log(data);
      if (data.statusCode == 200) {
        alert("Employee Deleted")
        this.ngOnInit();
      }
      else
      {
        alert("Something went wrong")
      }
    })

  }

  onEdit(id: any) {
    this.route.navigate(["/updateEmployee", id]);
  }
}
