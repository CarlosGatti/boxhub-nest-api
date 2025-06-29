import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InsuranceWhereInput } from './insurance-where.input';
import { Type } from 'class-transformer';
import { InsuranceOrderByWithRelationInput } from './insurance-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { InsuranceWhereUniqueInput } from './insurance-where-unique.input';
import { Int } from '@nestjs/graphql';
import { InsuranceCountAggregateInput } from './insurance-count-aggregate.input';
import { InsuranceAvgAggregateInput } from './insurance-avg-aggregate.input';
import { InsuranceSumAggregateInput } from './insurance-sum-aggregate.input';
import { InsuranceMinAggregateInput } from './insurance-min-aggregate.input';
import { InsuranceMaxAggregateInput } from './insurance-max-aggregate.input';

@ArgsType()
export class InsuranceAggregateArgs {

    @Field(() => InsuranceWhereInput, {nullable:true})
    @Type(() => InsuranceWhereInput)
    where?: InsuranceWhereInput;

    @Field(() => [InsuranceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InsuranceOrderByWithRelationInput>;

    @Field(() => InsuranceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InsuranceWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => InsuranceCountAggregateInput, {nullable:true})
    _count?: InsuranceCountAggregateInput;

    @Field(() => InsuranceAvgAggregateInput, {nullable:true})
    _avg?: InsuranceAvgAggregateInput;

    @Field(() => InsuranceSumAggregateInput, {nullable:true})
    _sum?: InsuranceSumAggregateInput;

    @Field(() => InsuranceMinAggregateInput, {nullable:true})
    _min?: InsuranceMinAggregateInput;

    @Field(() => InsuranceMaxAggregateInput, {nullable:true})
    _max?: InsuranceMaxAggregateInput;
}
