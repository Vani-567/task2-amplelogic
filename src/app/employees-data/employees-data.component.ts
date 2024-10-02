import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
declare namespace DataTables {
  interface Settings {
    pagingType?: string;
    pageLength?: number;
  }
}
@Component({
  selector: 'app-employees-data',
  templateUrl: './employees-data.component.html',
  styleUrls: ['./employees-data.component.scss']
})
export class EmployeesDataComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  data = [
    { "full_name": "Rani", "emp_Id": "RV00001", "email_id": "vani@gmail.com", "interested_in": "IT", "Address": "Hyderabad", "progress": "0/5", "manager": "mamatha" },
    { "full_name": "Vani", "emp_Id": "RV00001", "email_id": "vani@gmail.com", "interested_in": "IT", "Address": "Hyderabad", "progress": "0/5", "manager": "mamatha" },
    { "full_name": "Siva", "emp_Id": "RV00001", "email_id": "vani@gmail.com", "interested_in": "IT", "Address": "Hyderabad", "progress": "0/5", "manager": "mamatha" },
    { "full_name": "Siva", "emp_Id": "RV00001", "email_id": "vani@gmail.com", "interested_in": "IT", "Address": "Hyderabad", "progress": "0/5", "manager": "mamatha" },
    { "full_name": "Siva", "emp_Id": "RV00001", "email_id": "vani@gmail.com", "interested_in": "IT", "Address": "Hyderabad", "progress": "0/5", "manager": "mamatha" },
    { "full_name": "Vani", "emp_Id": "RV00001", "email_id": "vani@gmail.com", "interested_in": "IT", "Address": "Hyderabad", "progress": "0/5", "manager": "mamatha" },
    { "full_name": "Venkat", "emp_Id": "RV00001", "email_id": "vani@gmail.com", "interested_in": "IT", "Address": "Hyderabad", "progress": "0/5", "manager": "mamatha" },
    { "full_name": "Venkat", "emp_Id": "RV00001", "email_id": "vani@gmail.com", "interested_in": "IT", "Address": "Hyderabad", "progress": "0/5", "manager": "mamatha" },
    { "full_name": "Venkat", "emp_Id": "RV00001", "email_id": "vani@gmail.com", "interested_in": "IT", "Address": "Hyderabad", "progress": "0/5", "manager": "mamatha" },
    { "full_name": "Vani", "emp_Id": "RV00001", "email_id": "vani@gmail.com", "interested_in": "IT", "Address": "Hyderabad", "progress": "0/5", "manager": "mamatha" },
    { "full_name": "Vani", "emp_Id": "RV00001", "email_id": "vani@gmail.com", "interested_in": "IT", "Address": "Hyderabad", "progress": "0/5", "manager": "mamatha" },
    { "full_name": "Ravi", "emp_Id": "RV00001", "email_id": "vani@gmail.com", "interested_in": "IT", "Address": "Hyderabad", "progress": "0/5", "manager": "mamatha" },
    { "full_name": "Ravi", "emp_Id": "RV00001", "email_id": "vani@gmail.com", "interested_in": "IT", "Address": "Hyderabad", "progress": "0/5", "manager": "mamatha" },
  ]
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
  }
}
