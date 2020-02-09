import { Injectable } from '@nestjs/common';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
  products = [
    { id: '1', sku: '123', title: 'product-a' },
    { id: '2', sku: '234', title: 'product-b' }
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOneById(id: string): Product {
    return this.findAll().find(product => product.id === id);
  }

  create(product) {
    this.products = [...this.products, { ...product }];
  }

  update(updated) {
    this.products = this.products.map(product => {
      if (product.id === updated.id) {
        return { ...updated };
      }
      return product;
    });
  }

  delete(id: string) {
    this.products = this.products.filter(product => product.id !== id);
  }
}
