import {
    EMPLOYEE_REPOSITORY
  } from '../core/constants/index';
  import { Emp } from "./entities/emp.entity";

export const employeeProviders = [

    {
        provide: EMPLOYEE_REPOSITORY,
        useValue:Emp,
      },
]