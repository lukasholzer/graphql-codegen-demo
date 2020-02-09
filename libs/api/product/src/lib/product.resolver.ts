import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './services';
import { Product } from './models/product';

@Resolver(of => Product)
export class ProductResolver {
  constructor(private readonly _productService: ProductService) {}

  @Query(returns => Product)
  getProduct(@Args('id') id: string) {
    return this._productService.findOneById(id);
  }
}
