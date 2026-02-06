import { Field, Float, InputType } from '@nestjs/graphql';

import { DiscartItemCondition } from '@generated/prisma/discart-item-condition.enum';
import { DiscartItemType } from '@generated/prisma/discart-item-type.enum';
import { DiscartItemCategory } from '@generated/prisma/discart-item-category.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class CreateDiscartItemInput {
  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => DiscartItemType, { nullable: false })
  type!: DiscartItemType;

  @Field(() => Float, { nullable: true })
  price?: number | null;

  @Field(() => String, { nullable: true, defaultValue: 'OTHER' })
  category?: string;

  @Field(() => DiscartItemCondition, { nullable: false })
  condition!: DiscartItemCondition;

  @Field(() => String, { nullable: true })
  contactPhone?: string;  // opcional; se não vier, usar do usuário logado

  @Field(() => [String], { nullable: true })
  imageUrls?: string[];

  @Field(() => GraphQLJSON, { nullable: true })
  pickupAddress?: {
    condoName?: string;
    building?: string;
    unit?: string;
    notes?: string;
  };
}

