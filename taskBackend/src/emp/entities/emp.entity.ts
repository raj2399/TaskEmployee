import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

import { Department } from 'src/department/entities/department.entity';
@Table
export class Emp extends Model <Emp>{
    @Column({
    type:DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
     allowNull:false,
    })
    id:number;
    @Column({
        type:DataType.TEXT,
        allowNull:false
    })
    firstName:string;
    
    @Column({
        type:DataType.TEXT,
        allowNull:false
    })
    lastName:string;


    @Column({
        type:DataType.TEXT,
        allowNull:false
    })
    designation:string;


    @Column({
        type:DataType.TEXT,
        allowNull:false
    })
    email:string;


    @Column({
        type:DataType.DATEONLY,
        allowNull:false
    })
    DOB:any;


    @Column({
        type:DataType.TEXT,
        allowNull:false
    })
    address:string;

    @ForeignKey(()=> Department)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    departmentId: number;

    @Column({
        type:DataType.ENUM,
        values: ['0', '1'],
        allowNull:false,
        comment: "0 for inactive 1 for active",
    })
    isActive:string  

    @Column({
        type:DataType.ENUM,
        values: ['0', '1'],
        allowNull:false,
        comment: "0 for active 1 for deleted",
    })
    isdeleted:string  

   

    @BelongsTo(() => Department, {
        foreignKey: 'departmentId',
        targetKey: 'id',
        constraints: false,
      })
      departmentName: Emp;
}
