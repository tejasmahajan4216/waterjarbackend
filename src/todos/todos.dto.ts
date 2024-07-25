import { Employee } from './todos.entity';

export class CreateEmployeeDto {
  FirstName: string;
  SurName: string;
  Gender: string;
  Designation: string;
  Email: string;
  Address: string;
  Salary: string;
}
