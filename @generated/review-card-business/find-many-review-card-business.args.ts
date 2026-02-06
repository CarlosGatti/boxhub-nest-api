import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardBusinessWhereInput } from './review-card-business-where.input';
import { Type } from 'class-transformer';
import { ReviewCardBusinessOrderByWithRelationInput } from './review-card-business-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ReviewCardBusinessWhereUniqueInput } from './review-card-business-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewCardBusinessScalarFieldEnum } from './review-card-business-scalar-field.enum';

@ArgsType()
export class FindManyReviewCardBusinessArgs {

    @Field(() => ReviewCardBusinessWhereInput, {nullable:true})
    @Type(() => ReviewCardBusinessWhereInput)
    where?: ReviewCardBusinessWhereInput;

    @Field(() => [ReviewCardBusinessOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewCardBusinessOrderByWithRelationInput>;

    @Field(() => ReviewCardBusinessWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReviewCardBusinessWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ReviewCardBusinessScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReviewCardBusinessScalarFieldEnum>;
}
