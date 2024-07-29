import { Test, TestingModule } from '@nestjs/testing';
import { PptmmsbackendService } from './pptmmsbackend.service';

describe('PptmmsbackendService', () => {
  let service: PptmmsbackendService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PptmmsbackendService],
    }).compile();

    service = module.get<PptmmsbackendService>(PptmmsbackendService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
