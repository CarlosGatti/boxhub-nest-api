import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalWhereInput } from './bucket-goal-where.input';
import { Type } from 'class-transformer';
import { BucketGoalOrderByWithRelationInput } from './bucket-goal-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BucketGoalWhereUniqueInput } from './bucket-goal-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BucketGoalScalarFieldEnum } from './bucket-goal-scalar-field.enum';

@ArgsType()
export class FindManyBucketGoalArgs {

    @Field(() => BucketGoalWhereInput, {nullable:true})
    @Type(() => BucketGoalWhereInput)
    where?: BucketGoalWhereInput;

    @Field(() => [BucketGoalOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BucketGoalOrderByWithRelationInput>;

    @Field(() => BucketGoalWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BucketGoalWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BucketGoalScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BucketGoalScalarFieldEnum>;
}
