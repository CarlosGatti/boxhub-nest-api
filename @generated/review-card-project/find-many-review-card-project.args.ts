import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardProjectWhereInput } from './review-card-project-where.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectOrderByWithRelationInput } from './review-card-project-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ReviewCardProjectWhereUniqueInput } from './review-card-project-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewCardProjectScalarFieldEnum } from './review-card-project-scalar-field.enum';

@ArgsType()
export class FindManyReviewCardProjectArgs {

    @Field(() => ReviewCardProjectWhereInput, {nullable:true})
    @Type(() => ReviewCardProjectWhereInput)
    where?: ReviewCardProjectWhereInput;

    @Field(() => [ReviewCardProjectOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewCardProjectOrderByWithRelationInput>;

    @Field(() => ReviewCardProjectWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReviewCardProjectWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ReviewCardProjectScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReviewCardProjectScalarFieldEnum>;
}
