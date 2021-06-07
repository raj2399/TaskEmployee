import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'src/environments/environment';
import { emp_class } from './employee/employee.class';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
private employeeUrl=url.endPoints+"employment/getAllEmployee";
private departmentUrl=url.endPoints+"department/getAllDepartment";
private addempUrl=url.endPoints+"employment/addemployee";
private updateEmp=url.endPoints+"employment/updateEmployee"
private findemployeeUrl=url.endPoints+"employment/getEmployeeDataById";
private deleteEmployeeUrl=url.endPoints+"employment/deleteEmployee";

  constructor(private _http:HttpClient) { }

  getAllEmployeeData()
  {
    return this._http.get(this.employeeUrl);
  }

  getAllDepartment()
  {
    return this._http.get(this.departmentUrl).pipe(map((data: any) => data),catchError(error => { return throwError('Its a Trap!')})
    );
  }

  addemp(item:any)
  {
    let body=JSON.stringify(item);
    return this._http.post(this.addempUrl,body,httpOptions);
  }


  getEmployeeById(id:any){
    return this._http.get(this.findemployeeUrl+"?empId="+id);
  }

  updateEmployee(item:any)
  {
    let body=JSON.stringify(item);
    return this._http.put(this.updateEmp,body,httpOptions);
  }

  deleteEmployee(id:any)
  {
    return this._http.delete(this.deleteEmployeeUrl+"?employeeId="+id);

  }
}
