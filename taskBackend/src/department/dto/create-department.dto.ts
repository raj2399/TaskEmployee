import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDepartmentDto {

    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'departmentName' })
    readonly departmentName: string;
}
