import { Field, Float, InputType } from '@nestjs/graphql';

import { DiscartItemCondition } from '../../../@generated/prisma/discart-item-condition.enum';
import { DiscartItemType } from '../../../@generated/prisma/discart-item-type.enum';
import { DiscartItemCategory } from '../../../@generated/prisma/discart-item-category.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class CreateDiscartItemInput {
  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => DiscartItemType, { nullable: false })
  type!: keyof typeof DiscartItemType;

  @Field(() => Float, { nullable: true })
  price?: number | null;

  @Field(() => DiscartItemCategory, { nullable: true, defaultValue: 'OTHER' })
  category?: keyof typeof DiscartItemCategory;

  @Field(() => DiscartItemCondition, { nullable: false })
  condition!: keyof typeof DiscartItemCondition;

  @Field(() => String, { nullable: false })
  contactPhone!: string;

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

