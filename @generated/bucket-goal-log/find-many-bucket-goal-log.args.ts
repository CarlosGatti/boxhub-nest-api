import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalLogWhereInput } from './bucket-goal-log-where.input';
import { Type } from 'class-transformer';
import { BucketGoalLogOrderByWithRelationInput } from './bucket-goal-log-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BucketGoalLogWhereUniqueInput } from './bucket-goal-log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BucketGoalLogScalarFieldEnum } from './bucket-goal-log-scalar-field.enum';

@ArgsType()
export class FindManyBucketGoalLogArgs {

    @Field(() => BucketGoalLogWhereInput, {nullable:true})
    @Type(() => BucketGoalLogWhereInput)
    where?: BucketGoalLogWhereInput;

    @Field(() => [BucketGoalLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BucketGoalLogOrderByWithRelationInput>;

    @Field(() => BucketGoalLogWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BucketGoalLogWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BucketGoalLogScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BucketGoalLogScalarFieldEnum>;
}
