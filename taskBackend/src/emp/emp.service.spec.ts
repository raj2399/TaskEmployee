import { Test, TestingModule } from '@nestjs/testing';
import { EmpService } from './emp.service';

describe('EmpService', () => {
  let service: EmpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpService],
    }).compile();

    service = module.get<EmpService>(EmpService);
  });

  describe("Testing Employee Service after mock",()=>{

    it("testing getby Id method",()=>{
      expect(typeof service.findOne(1))
    })

    it("testing getby Email method",()=>{
      expect(typeof service.findOne("shahraj2399@gamil.com"))
    })


  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
