1;
2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
25;
26;
27;
28;
29;
30;
import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './todos.schem';
import { EmployeeController } from './todos.controller';
import { EmployeeService } from './todos.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Employee.name,
        schema: EmployeeSchema,
      },
    ]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
