import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedBrandingAssetWhereInput } from './defined-branding-asset-where.input';
import { Type } from 'class-transformer';
import { DefinedBrandingAssetOrderByWithRelationInput } from './defined-branding-asset-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedBrandingAssetWhereUniqueInput } from './defined-branding-asset-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedBrandingAssetCountAggregateInput } from './defined-branding-asset-count-aggregate.input';
import { DefinedBrandingAssetAvgAggregateInput } from './defined-branding-asset-avg-aggregate.input';
import { DefinedBrandingAssetSumAggregateInput } from './defined-branding-asset-sum-aggregate.input';
import { DefinedBrandingAssetMinAggregateInput } from './defined-branding-asset-min-aggregate.input';
import { DefinedBrandingAssetMaxAggregateInput } from './defined-branding-asset-max-aggregate.input';

@ArgsType()
export class DefinedBrandingAssetAggregateArgs {

    @Field(() => DefinedBrandingAssetWhereInput, {nullable:true})
    @Type(() => DefinedBrandingAssetWhereInput)
    where?: DefinedBrandingAssetWhereInput;

    @Field(() => [DefinedBrandingAssetOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedBrandingAssetOrderByWithRelationInput>;

    @Field(() => DefinedBrandingAssetWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedBrandingAssetWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedBrandingAssetCountAggregateInput, {nullable:true})
    _count?: DefinedBrandingAssetCountAggregateInput;

    @Field(() => DefinedBrandingAssetAvgAggregateInput, {nullable:true})
    _avg?: DefinedBrandingAssetAvgAggregateInput;

    @Field(() => DefinedBrandingAssetSumAggregateInput, {nullable:true})
    _sum?: DefinedBrandingAssetSumAggregateInput;

    @Field(() => DefinedBrandingAssetMinAggregateInput, {nullable:true})
    _min?: DefinedBrandingAssetMinAggregateInput;

    @Field(() => DefinedBrandingAssetMaxAggregateInput, {nullable:true})
    _max?: DefinedBrandingAssetMaxAggregateInput;
}
