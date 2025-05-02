import { Test, TestingModule } from '@nestjs/testing';
import { RescService } from './resc.service';

describe('RescService', () => {
  let service: RescService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RescService],
    }).compile();

    service = module.get<RescService>(RescService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
