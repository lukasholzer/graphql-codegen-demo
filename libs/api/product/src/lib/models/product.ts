import { ObjectType, Field, Int, ID } from 'type-graphql';
import { BaseEntity } from '@demo/api/shared';

export const enum ProductStatus {
  Published = 'published',
  Draft = 'draft'
}

export const enum Currency {
  Euro = 'EUR'
}

export const enum StockAvailability {
  Discontinued = 'Discontinued',
  InStock = 'InStock',
  InStoreOnly = 'InStoreOnly',
  LimitedAvailability = 'LimitedAvailability',
  OnlineOnly = 'OnlineOnly',
  OutOfStock = 'OutOfStock',
  PreOrder = 'PreOrder',
  PreSale = 'PreSale',
  SoldOut = 'SoldOut'
}

// export interface Stock {
//   level: number;
//   availability: StockAvailability;
// }

// export interface Price {
//   amount: number;
//   currency: Currency;
//   includesTax: boolean;
// }

@ObjectType()
export class Product extends BaseEntity {
  @Field(type => ID)
  id: string;

  @Field()
  sku: string;

  // @Field()
  // status: ProductStatus;

  @Field()
  title: string;

  // @Field()
  // slug: string;
  // @Field()
  // description: string;

  // @Field()
  // featuredImage: string | number;

  // @Field()
  // images: (string| number)[];

  // @Field()
  // merchant: string | number;

  // @Field()
  // price: Price;

  // @Field()
  // unit: Unit,

  // @Field()
  // stock: Stock;
}
