import { Sequelize } from 'sequelize-typescript';
import { Emp } from 'src/emp/entities/emp.entity';
import { Department } from "src/department/entities/department.entity";
import { databaseConfig } from './database.config';
export const databaseProviders = [
   
    {
        provide: 'SEQUELIZEEMPDB',
        useFactory: async () => {
          let config1;
          config1 = databaseConfig.emp;
    
          const empSequelize = new Sequelize(config1.urlDatabase, {
            logging: false,
          });
          empSequelize.addModels([Department]);
          empSequelize.addModels([Emp]);
          await empSequelize.sync();
    
          return empSequelize;
        },
      }

];