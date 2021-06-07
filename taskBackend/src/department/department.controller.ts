import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import {
  Controller,
  Get,
  Post,
  Param,
  Req,
  Res,
  Body,
  Delete,
  Query,
  Patch,
} from '@nestjs/common';
import {
  ApiProperty,
  ApiQuery,
  ApiTags,
  ApiCreatedResponse,
  ApiBody,
  ApiHeader,
  ApiConsumes,
} from '@nestjs/swagger';


@ApiTags('department')
@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post('/addDepartment')
  @ApiCreatedResponse({ description: 'Field Details' })
  @ApiBody({ type:CreateDepartmentDto })
  async addDepartment(@Body() fieldData: CreateDepartmentDto, @Res() res) {
   console.log(fieldData);

    fieldData['isActive'] = '1';
    const newDepartmentField = await this.departmentService.create({
      ...fieldData,
    });
    return res.json({
      statusCode: 200,
      message: 'success',
      valid: true,
      data: { newDepartmentField },
    });
  }

  @Get('/getAllDepartment')
  async getAllDepartment(@Res() res) {
    const getAllDepartment = await this.departmentService.getAllDepartmentField();

    return res.json({
      statusCode: 200,
      message: 'success',
      data: {
        valid: true,
        ...getAllDepartment,
      },
    });
  }


}
