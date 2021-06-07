import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { department_class } from "../employee/department.class";
import { emp_class } from "../employee/employee.class";
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  departmentId: number
  department_list: department_class[];
  firstName: string = "";
  lastName: string;
  designation: string;
  email: string;
  DOB: Date;
  id:number;
  address: string;
  minDate = new Date(1980, 0, 1);
  maxDate = new Date(2000, 11, 31);
  arr_Emp: emp_class[];
  arr: emp_class[];
  arr_department: any = [];


  constructor(private _act: ActivatedRoute,private _router: Router, private emp_ser: EmpserviceService) { }

  ngOnInit(): void {

    this.id=this._act.snapshot.params['id'];
 this.emp_ser.getEmployeeById(this.id).subscribe((data:any)=>{
      console.log(data.empExist.id);
      this.id=data.empExist.id;
      this.firstName=data.empExist.firstName;
      this.lastName=data.empExist.lastName;
      this.address=data.empExist.address;
      this.DOB=data.empExist.DOB;
      this.email=data.empExist.email;
      this.designation=data.empExist.designation;
      this.departmentId=data.empExist.departmentId;
    })
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


  onclickUpdate() {

    this.emp_ser.updateEmployee(new emp_class(this.firstName, this.lastName, this.designation, this.email, this.DOB, this.address, this.departmentId,this.id)).subscribe(
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
