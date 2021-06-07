import { Module } from '@nestjs/common';
import { EmpService } from './emp.service';
import { EmpController } from './emp.controller';
import { employeeProviders } from './emp.provider';

@Module({
  controllers: [EmpController],
  providers: [...employeeProviders,EmpService],
  exports:[EmpService]
})

export class EmpModule {}
