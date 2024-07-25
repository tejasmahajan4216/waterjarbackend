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
