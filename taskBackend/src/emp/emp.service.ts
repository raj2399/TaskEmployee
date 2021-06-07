import { Inject, Injectable } from '@nestjs/common';
import { CreateEmpDto } from './dto/create-emp.dto';
import { EMPLOYEE_REPOSITORY} from "../core/constants";
import { Emp } from './entities/emp.entity';
import { Department } from 'src/department/entities/department.entity';

@Injectable()
export class EmpService {

  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly empRepository: typeof Emp
  ) {}


  async create(fieldData: CreateEmpDto): Promise<Emp> {
    return await this.empRepository.create<Emp>(fieldData);
  }

  
  async getAllEmpField(): Promise<any> {
    return await this.empRepository.findAll({
      where: { isActive: '1' },
      include: [
        {
          attributes: ['departmentName'],
          model:Department,
        },
      ]
    });
  }
  async findOne(id): Promise<Emp> {
    return await this.empRepository.findOne<Emp>({
      where: { id },
      raw:true
    });
  }

  async update(empData:any, id: any): Promise<any> {
    return await this.empRepository.update(empData, { where: { id } });
  }

  async findOneByEmail(email): Promise<Emp> {
    return await this.empRepository.findOne<Emp>({
      where: {email},
    });
  }
}
