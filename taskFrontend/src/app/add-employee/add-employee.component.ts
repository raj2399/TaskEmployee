import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { department_class } from "../employee/department.class";
import { emp_class } from "../employee/employee.class";
import { EmpserviceService } from '../empservice.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  departmentId: number
  department_list: department_class[];

  firstName: string = "";
  lastName: string;
  designation: string;
  email: string;
  DOB: Date;
  address: string;
  minDate = new Date(1980, 0, 1);
  maxDate = new Date(2000, 11, 31);
  arr_Emp: emp_class[];
  arr: emp_class[];
  arr_department: any = [];


  constructor(private _router: Router, private emp_ser: EmpserviceService) { }

  ngOnInit(): void {

    this.emp_ser.getAllDepartment().subscribe((response: any) => {
      //console.log(response);
      console.log(response.data.rows);
      console.log(response.data.length);
      // console.log(response[0].data.length);

      for (let i = 0; i < response.data.rows.length; i++) {
        this.arr_department.push(response.data.rows[i]);
      }
      console.log(this.arr_department);
    });
  }

  keyPressText(event: any) {
    const pattern = /[A-Z\a-z\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    // console.log(inputChar, e.charCode);
    if (!pattern.test(inputChar) || this.firstName.length >= 20) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }
  onclickCancle() {
    this._router.navigate(['']);
  }


  onclickAdd() {

    this.emp_ser.addemp(new emp_class(this.firstName, this.lastName, this.designation, this.email, this.DOB, this.address, this.departmentId)).subscribe(
      (data: any) => {
        console.log(data);
        if (data.statusCode == 200) {
          this._router.navigate(['']);
        }

        else {
          alert("Employee Not added");
        }
      }
    )
  }


}
