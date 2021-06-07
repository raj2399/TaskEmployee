import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentService } from './department.service';

describe('DepartmentService', () => {
  let service: DepartmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepartmentService],
    }).compile();

    service = module.get<DepartmentService>(DepartmentService);
  });

  describe("Testing Employee Service after mock",()=>{

    it("testing getby Id method",()=>{
      expect(typeof service.findOne(1))
    })

    it("testing getAll Data",()=>{
      expect(typeof service.getAllDepartmentField())
    })
  })


  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
