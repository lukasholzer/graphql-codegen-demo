import { Module } from '@nestjs/common';
import { ProductService } from './services';
import { ProductResolver } from './product.resolver';

@Module({
  providers: [ProductService, ProductResolver]
})
export class ProductModule {}
