import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalMediaWhereInput } from './bucket-goal-media-where.input';
import { Type } from 'class-transformer';
import { BucketGoalMediaOrderByWithRelationInput } from './bucket-goal-media-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BucketGoalMediaWhereUniqueInput } from './bucket-goal-media-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BucketGoalMediaScalarFieldEnum } from './bucket-goal-media-scalar-field.enum';

@ArgsType()
export class FindFirstBucketGoalMediaOrThrowArgs {

    @Field(() => BucketGoalMediaWhereInput, {nullable:true})
    @Type(() => BucketGoalMediaWhereInput)
    where?: BucketGoalMediaWhereInput;

    @Field(() => [BucketGoalMediaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BucketGoalMediaOrderByWithRelationInput>;

    @Field(() => BucketGoalMediaWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BucketGoalMediaWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BucketGoalMediaScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BucketGoalMediaScalarFieldEnum>;
}
