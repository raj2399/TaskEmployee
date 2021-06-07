import { Table, Column, Model, DataType } from 'sequelize-typescript';
@Table
export class Department extends Model<Department>{
    @Column({
        type:DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
        allowNull:false,
    })
    id:number
    @Column({
        type:DataType.TEXT,
        allowNull:false
    })
    departmentName:string
    
    @Column({
        type:DataType.ENUM,
        values: ['0', '1'],
        allowNull:false,
        comment: "0 for inactive 1 for active",
    })
    isActive:string   
}