import { Test } from '@nestjs/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [ProductService]
    }).compile();

    service = app.get<ProductService>(ProductService);
  });

  describe('findAll Products', () => {
    it('should find all products', () => {
      expect(service.findAll()).toEqual([]);
    });
  });
});
