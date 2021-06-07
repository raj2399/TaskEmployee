import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpModule } from './emp/emp.module';
import { DepartmentModule } from './department/department.module';
import { DatabaseModule } from './core/database/database.module';

@Module({
  imports: [DatabaseModule,EmpModule, DepartmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
