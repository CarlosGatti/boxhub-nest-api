import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { PortfolioOrderByWithRelationInput } from '../portfolio/portfolio-order-by-with-relation.input';
import { AssetOrderByWithRelationInput } from '../asset/asset-order-by-with-relation.input';

@InputType()
export class TransactionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    portfolioId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assetId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    fees?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    executedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PortfolioOrderByWithRelationInput, {nullable:true})
    @Type(() => PortfolioOrderByWithRelationInput)
    portfolio?: PortfolioOrderByWithRelationInput;

    @Field(() => AssetOrderByWithRelationInput, {nullable:true})
    @Type(() => AssetOrderByWithRelationInput)
    asset?: AssetOrderByWithRelationInput;
}
