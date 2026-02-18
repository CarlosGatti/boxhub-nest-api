import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalPinWhereInput } from './bucket-goal-pin-where.input';
import { Type } from 'class-transformer';
import { BucketGoalPinOrderByWithRelationInput } from './bucket-goal-pin-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BucketGoalPinWhereUniqueInput } from './bucket-goal-pin-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BucketGoalPinScalarFieldEnum } from './bucket-goal-pin-scalar-field.enum';

@ArgsType()
export class FindFirstBucketGoalPinArgs {

    @Field(() => BucketGoalPinWhereInput, {nullable:true})
    @Type(() => BucketGoalPinWhereInput)
    where?: BucketGoalPinWhereInput;

    @Field(() => [BucketGoalPinOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BucketGoalPinOrderByWithRelationInput>;

    @Field(() => BucketGoalPinWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BucketGoalPinWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BucketGoalPinScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BucketGoalPinScalarFieldEnum>;
}
