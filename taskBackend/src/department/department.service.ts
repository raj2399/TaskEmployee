import { Inject, Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';
import { DEPARTMENT_REPOSITORY } from "../core/constants";
@Injectable()

export class DepartmentService {

  constructor(
    @Inject(DEPARTMENT_REPOSITORY)
    private readonly departmentFieldRepository: typeof Department
  ) {}


  async create(fieldData: CreateDepartmentDto): Promise<Department> {
    return await this.departmentFieldRepository.create<Department>(fieldData);
  }
  async getAllDepartmentField(): Promise<any> {
    return await this.departmentFieldRepository.findAndCountAll({
      where: { isActive: '1' },
    });
  }
  async findOne(departmentName): Promise<Department> {
    return await this.departmentFieldRepository.findOne<Department>({
      where: { departmentName },
    });
  }

}
