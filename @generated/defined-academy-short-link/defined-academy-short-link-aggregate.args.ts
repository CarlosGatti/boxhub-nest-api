import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkWhereInput } from './defined-academy-short-link-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkOrderByWithRelationInput } from './defined-academy-short-link-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyShortLinkCountAggregateInput } from './defined-academy-short-link-count-aggregate.input';
import { DefinedAcademyShortLinkAvgAggregateInput } from './defined-academy-short-link-avg-aggregate.input';
import { DefinedAcademyShortLinkSumAggregateInput } from './defined-academy-short-link-sum-aggregate.input';
import { DefinedAcademyShortLinkMinAggregateInput } from './defined-academy-short-link-min-aggregate.input';
import { DefinedAcademyShortLinkMaxAggregateInput } from './defined-academy-short-link-max-aggregate.input';

@ArgsType()
export class DefinedAcademyShortLinkAggregateArgs {

    @Field(() => DefinedAcademyShortLinkWhereInput, {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereInput)
    where?: DefinedAcademyShortLinkWhereInput;

    @Field(() => [DefinedAcademyShortLinkOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyShortLinkOrderByWithRelationInput>;

    @Field(() => DefinedAcademyShortLinkWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>;

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
