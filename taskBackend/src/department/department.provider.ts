import {
    DEPARTMENT_REPOSITORY
  } from '../core/constants/index';
  import { Department } from "./entities/department.entity";

export const departmentProviders = [

    {
        provide: DEPARTMENT_REPOSITORY,
        useValue:Department,
      },
]