import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductModule } from '@demo/api/product';
import { environment } from '../environments/environment';

@Module({
  imports: [
    ProductModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      installSubscriptionHandlers: true,
      autoSchemaFile: environment.production
        ? true
        : 'libs/shared/interfaces/src/schema.graphql',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
