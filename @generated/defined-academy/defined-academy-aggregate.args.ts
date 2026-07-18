import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyOrderByWithRelationInput } from './defined-academy-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCountAggregateInput } from './defined-academy-count-aggregate.input';
import { DefinedAcademyAvgAggregateInput } from './defined-academy-avg-aggregate.input';
import { DefinedAcademySumAggregateInput } from './defined-academy-sum-aggregate.input';
import { DefinedAcademyMinAggregateInput } from './defined-academy-min-aggregate.input';
import { DefinedAcademyMaxAggregateInput } from './defined-academy-max-aggregate.input';

@ArgsType()
export class DefinedAcademyAggregateArgs {

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyWhereInput)
    where?: DefinedAcademyWhereInput;

    @Field(() => [DefinedAcademyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyOrderByWithRelationInput>;

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedAcademyCountAggregateInput, {nullable:true})
    _count?: DefinedAcademyCountAggregateInput;

    @Field(() => DefinedAcademyAvgAggregateInput, {nullable:true})
    _avg?: DefinedAcademyAvgAggregateInput;

    @Field(() => DefinedAcademySumAggregateInput, {nullable:true})
    _sum?: DefinedAcademySumAggregateInput;

    @Field(() => DefinedAcademyMinAggregateInput, {nullable:true})
    _min?: DefinedAcademyMinAggregateInput;

    @Field(() => DefinedAcademyMaxAggregateInput, {nullable:true})
    _max?: DefinedAcademyMaxAggregateInput;
}
