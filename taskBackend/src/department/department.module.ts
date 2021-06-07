import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { departmentProviders } from './department.provider';

@Module({
  controllers: [DepartmentController],
  providers: [...departmentProviders,DepartmentService],
  exports:[DepartmentModule]
})
export class DepartmentModule {}
