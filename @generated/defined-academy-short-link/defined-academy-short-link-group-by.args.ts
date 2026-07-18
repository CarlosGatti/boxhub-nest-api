import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkWhereInput } from './defined-academy-short-link-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkOrderByWithAggregationInput } from './defined-academy-short-link-order-by-with-aggregation.input';
import { DefinedAcademyShortLinkScalarFieldEnum } from './defined-academy-short-link-scalar-field.enum';
import { DefinedAcademyShortLinkScalarWhereWithAggregatesInput } from './defined-academy-short-link-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyShortLinkCountAggregateInput } from './defined-academy-short-link-count-aggregate.input';
import { DefinedAcademyShortLinkAvgAggregateInput } from './defined-academy-short-link-avg-aggregate.input';
import { DefinedAcademyShortLinkSumAggregateInput } from './defined-academy-short-link-sum-aggregate.input';
import { DefinedAcademyShortLinkMinAggregateInput } from './defined-academy-short-link-min-aggregate.input';
import { DefinedAcademyShortLinkMaxAggregateInput } from './defined-academy-short-link-max-aggregate.input';

@ArgsType()
export class DefinedAcademyShortLinkGroupByArgs {

    @Field(() => DefinedAcademyShortLinkWhereInput, {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereInput)
    where?: DefinedAcademyShortLinkWhereInput;

    @Field(() => [DefinedAcademyShortLinkOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyShortLinkOrderByWithAggregationInput>;

    @Field(() => [DefinedAcademyShortLinkScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedAcademyShortLinkScalarFieldEnum>;

    @Field(() => DefinedAcademyShortLinkScalarWhereWithAggregatesInput, {nullable:true})
    having?: DefinedAcademyShortLinkScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedAcademyShortLinkCountAggregateInput, {nullable:true})
    _count?: DefinedAcademyShortLinkCountAggregateInput;

    @Field(() => DefinedAcademyShortLinkAvgAggregateInput, {nullable:true})
    _avg?: DefinedAcademyShortLinkAvgAggregateInput;

    @Field(() => DefinedAcademyShortLinkSumAggregateInput, {nullable:true})
    _sum?: DefinedAcademyShortLinkSumAggregateInput;

    @Field(() => DefinedAcademyShortLinkMinAggregateInput, {nullable:true})
    _min?: DefinedAcademyShortLinkMinAggregateInput;

    @Field(() => DefinedAcademyShortLinkMaxAggregateInput, {nullable:true})
    _max?: DefinedAcademyShortLinkMaxAggregateInput;
}
