
import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateEmpDto {

    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'departmentName' })
    readonly firstName: string;

    
    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'departmentName' })
    readonly lastName: string;

    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'departmentName' })
    readonly designation: string;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({type:String,description:'Email'})
    readonly email: any;


    
    @IsNotEmpty()
    @ApiProperty({ type:Date, description: 'departmentName' })
    readonly DOB:any;

    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'departmentName' })
    readonly address: string;


    @IsNotEmpty()
    @ApiProperty({ type:Number, description: 'departmentName' })
    readonly departmentId:number;

}
