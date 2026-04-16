import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProjectWhereInput } from './defined-project-where.input';
import { Type } from 'class-transformer';
import { DefinedProjectOrderByWithRelationInput } from './defined-project-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedProjectCountAggregateInput } from './defined-project-count-aggregate.input';
import { DefinedProjectAvgAggregateInput } from './defined-project-avg-aggregate.input';
import { DefinedProjectSumAggregateInput } from './defined-project-sum-aggregate.input';
import { DefinedProjectMinAggregateInput } from './defined-project-min-aggregate.input';
import { DefinedProjectMaxAggregateInput } from './defined-project-max-aggregate.input';

@ArgsType()
export class DefinedProjectAggregateArgs {

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    where?: DefinedProjectWhereInput;

    @Field(() => [DefinedProjectOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedProjectOrderByWithRelationInput>;

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedProjectCountAggregateInput, {nullable:true})
    _count?: DefinedProjectCountAggregateInput;

    @Field(() => DefinedProjectAvgAggregateInput, {nullable:true})
    _avg?: DefinedProjectAvgAggregateInput;

    @Field(() => DefinedProjectSumAggregateInput, {nullable:true})
    _sum?: DefinedProjectSumAggregateInput;

    @Field(() => DefinedProjectMinAggregateInput, {nullable:true})
    _min?: DefinedProjectMinAggregateInput;

    @Field(() => DefinedProjectMaxAggregateInput, {nullable:true})
    _max?: DefinedProjectMaxAggregateInput;
}
