import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query, Put } from '@nestjs/common';
import { EmpService } from './emp.service';
import { CreateEmpDto } from './dto/create-emp.dto';
import { UpdateEmpDto } from './dto/update-emp.dto';
import {
  ApiProperty,
  ApiQuery,
  ApiTags,
  ApiCreatedResponse,
  ApiBody,
  ApiHeader,
  ApiConsumes,
} from '@nestjs/swagger';
@ApiTags('Employment')
@Controller('employment')

export class EmpController {
  constructor(private readonly empService: EmpService) { }


  @Get('/getEmployeeDataById')
  @ApiCreatedResponse({ description: 'Get Data By Employee Id' })
  @ApiQuery({ name: 'empId' })
  async forgetPin(@Query() data: {empId: number }, @Res() res) {
    //const getOTP = await this.generateOTP();
    if (!data.empId) {
      return res.json({
        statusCode: 422,
        message: '',
        valid: false,
        data: { message: 'Required field are missing' },
      });
    }

    const empExist = await this.empService.findOne(data.empId);
    if (empExist === null) {
      return res.json({
        statusCode: 422,
        message: 'invalid',
        valid: false,
        data: { message: 'Emp not exist ' },
      });
    } else {
      return res.json({
        statusCode: 200,
        message: 'success',
        valid: true,
        empExist
      });
    }
  }

  @Post('/addemployee')
  @ApiCreatedResponse({ description: 'Field Details' })
  @ApiBody({ type: CreateEmpDto })
  async addEmployee(@Body() fieldData: CreateEmpDto, @Res() res) {

    if (!fieldData) {
      return res.json({
        statusCode: 422,
        message: '',
        valid: false,
        data: { message: 'Required field are missing' },
      });
    }
    else {

      const empDataExist = await this.empService.findOneByEmail(fieldData.email);

      if (empDataExist) {
        return res.json({
          statusCode: 400,
          message: 'fail',
          valid: false,
          data: { message: "Employee email id already exist" }
        })
      }
      else {

        fieldData['isActive'] = '1';
        fieldData['isdeleted'] = '0';

        const addData = await this.empService.create(fieldData);
        return res.json({
          statusCode: 200,
          message: 'success',
          valid: true,
          data: { addData },
        });
      }
    }
  }


  @Put('/updateEmployee')
  @ApiCreatedResponse({ description: 'Field Details' })
  @ApiBody({ type:UpdateEmpDto})
  async updateEmployee(@Body() fieldData:UpdateEmpDto, @Res() res) {

    if (!fieldData) {
      return res.json({
        statusCode: 422,
        message: '',
        valid: false,
        data: { message: 'Required field are missing' },
      });
    }
    else {

     
        fieldData['isActive'] = '1';
        fieldData['isdeleted'] = '0';
       // console.log(fieldData);

        const addData = await this.empService.update(fieldData,fieldData.id);
        return res.json({
          statusCode: 200,
          message: 'success',
          valid: true,
          data: { addData },
        });
      
    }
  }

  @Get('/getAllEmployee')
  async getAllEmployee(@Res() res) {
    const getAllEmployee = await this.empService.getAllEmpField();

    return res.json({
      statusCode: 200,
      message: 'success',
      data:getAllEmployee,
    });
  }

  @Delete('/deleteEmployee')
  @ApiQuery({ name: 'employeeId', type: Number })
  async deleteScore(@Query() query: { employeeId: number }, @Res() res) {
    let deleteData;
    try {
      const empDataExist= await this.empService.findOne(query.employeeId);

      if(empDataExist)
      {
        empDataExist.isdeleted='1';
        empDataExist.isActive='0';
        deleteData = await this.empService.update(empDataExist,query.employeeId); 
    return res.json({
      statusCode: 200,
      message: 'success',
      valid: true,
      data: { deleteData },
    });
      }
         else
      {
        return res.json({
          statusCode: 200,
          message: 'Fail',
          valid:false,
          data: {message:'Employee not Exist'},
        });
        
      }
    } catch (error) {
      console.log(error);
    }
  }
}
