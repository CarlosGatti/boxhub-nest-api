import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedIntakeFormWhereInput } from './defined-intake-form-where.input';
import { Type } from 'class-transformer';
import { DefinedIntakeFormOrderByWithRelationInput } from './defined-intake-form-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedIntakeFormWhereUniqueInput } from './defined-intake-form-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedIntakeFormCountAggregateInput } from './defined-intake-form-count-aggregate.input';
import { DefinedIntakeFormAvgAggregateInput } from './defined-intake-form-avg-aggregate.input';
import { DefinedIntakeFormSumAggregateInput } from './defined-intake-form-sum-aggregate.input';
import { DefinedIntakeFormMinAggregateInput } from './defined-intake-form-min-aggregate.input';
import { DefinedIntakeFormMaxAggregateInput } from './defined-intake-form-max-aggregate.input';

@ArgsType()
export class DefinedIntakeFormAggregateArgs {

    @Field(() => DefinedIntakeFormWhereInput, {nullable:true})
    @Type(() => DefinedIntakeFormWhereInput)
    where?: DefinedIntakeFormWhereInput;

    @Field(() => [DefinedIntakeFormOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedIntakeFormOrderByWithRelationInput>;

    @Field(() => DefinedIntakeFormWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedIntakeFormWhereUniqueInput, 'id' | 'shareToken'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedIntakeFormCountAggregateInput, {nullable:true})
    _count?: DefinedIntakeFormCountAggregateInput;

    @Field(() => DefinedIntakeFormAvgAggregateInput, {nullable:true})
    _avg?: DefinedIntakeFormAvgAggregateInput;

    @Field(() => DefinedIntakeFormSumAggregateInput, {nullable:true})
    _sum?: DefinedIntakeFormSumAggregateInput;

    @Field(() => DefinedIntakeFormMinAggregateInput, {nullable:true})
    _min?: DefinedIntakeFormMinAggregateInput;

    @Field(() => DefinedIntakeFormMaxAggregateInput, {nullable:true})
    _max?: DefinedIntakeFormMaxAggregateInput;
}
