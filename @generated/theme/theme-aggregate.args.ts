import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThemeWhereInput } from './theme-where.input';
import { Type } from 'class-transformer';
import { ThemeOrderByWithRelationInput } from './theme-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ThemeWhereUniqueInput } from './theme-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ThemeCountAggregateInput } from './theme-count-aggregate.input';
import { ThemeAvgAggregateInput } from './theme-avg-aggregate.input';
import { ThemeSumAggregateInput } from './theme-sum-aggregate.input';
import { ThemeMinAggregateInput } from './theme-min-aggregate.input';
import { ThemeMaxAggregateInput } from './theme-max-aggregate.input';

@ArgsType()
export class ThemeAggregateArgs {

    @Field(() => ThemeWhereInput, {nullable:true})
    @Type(() => ThemeWhereInput)
    where?: ThemeWhereInput;

    @Field(() => [ThemeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ThemeOrderByWithRelationInput>;

    @Field(() => ThemeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ThemeWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ThemeCountAggregateInput, {nullable:true})
    _count?: ThemeCountAggregateInput;

    @Field(() => ThemeAvgAggregateInput, {nullable:true})
    _avg?: ThemeAvgAggregateInput;

    @Field(() => ThemeSumAggregateInput, {nullable:true})
    _sum?: ThemeSumAggregateInput;

    @Field(() => ThemeMinAggregateInput, {nullable:true})
    _min?: ThemeMinAggregateInput;

    @Field(() => ThemeMaxAggregateInput, {nullable:true})
    _max?: ThemeMaxAggregateInput;
}
