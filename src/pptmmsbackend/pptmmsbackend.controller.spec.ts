import { Test, TestingModule } from '@nestjs/testing';
import { PptmmsbackendController } from './pptmmsbackend.controller';
import { PptmmsbackendService } from './pptmmsbackend.service';

describe('PptmmsbackendController', () => {
  let controller: PptmmsbackendController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PptmmsbackendController],
      providers: [PptmmsbackendService],
    }).compile();

    controller = module.get<PptmmsbackendController>(PptmmsbackendController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
