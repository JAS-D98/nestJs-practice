import { Test, TestingModule } from '@nestjs/testing';
import { RescController } from './resc.controller';
import { RescService } from './resc.service';

describe('RescController', () => {
  let controller: RescController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RescController],
      providers: [RescService],
    }).compile();

    controller = module.get<RescController>(RescController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
