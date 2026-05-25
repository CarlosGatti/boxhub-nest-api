import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedBrandingAssetWhereInput } from './defined-branding-asset-where.input';
import { Type } from 'class-transformer';
import { DefinedBrandingAssetOrderByWithAggregationInput } from './defined-branding-asset-order-by-with-aggregation.input';
import { DefinedBrandingAssetScalarFieldEnum } from './defined-branding-asset-scalar-field.enum';
import { DefinedBrandingAssetScalarWhereWithAggregatesInput } from './defined-branding-asset-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedBrandingAssetCountAggregateInput } from './defined-branding-asset-count-aggregate.input';
import { DefinedBrandingAssetAvgAggregateInput } from './defined-branding-asset-avg-aggregate.input';
import { DefinedBrandingAssetSumAggregateInput } from './defined-branding-asset-sum-aggregate.input';
import { DefinedBrandingAssetMinAggregateInput } from './defined-branding-asset-min-aggregate.input';
import { DefinedBrandingAssetMaxAggregateInput } from './defined-branding-asset-max-aggregate.input';

@ArgsType()
export class DefinedBrandingAssetGroupByArgs {

    @Field(() => DefinedBrandingAssetWhereInput, {nullable:true})
    @Type(() => DefinedBrandingAssetWhereInput)
    where?: DefinedBrandingAssetWhereInput;

    @Field(() => [DefinedBrandingAssetOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DefinedBrandingAssetOrderByWithAggregationInput>;

    @Field(() => [DefinedBrandingAssetScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedBrandingAssetScalarFieldEnum>;

    @Field(() => DefinedBrandingAssetScalarWhereWithAggregatesInput, {nullable:true})
    having?: DefinedBrandingAssetScalarWhereWithAggregatesInput;

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
