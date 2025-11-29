import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RatingWhereInput } from './rating-where.input';
import { Type } from 'class-transformer';
import { RatingOrderByWithRelationInput } from './rating-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { RatingWhereUniqueInput } from './rating-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RatingScalarFieldEnum } from './rating-scalar-field.enum';

@ArgsType()
export class FindFirstRatingArgs {

    @Field(() => RatingWhereInput, {nullable:true})
    @Type(() => RatingWhereInput)
    where?: RatingWhereInput;

    @Field(() => [RatingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RatingOrderByWithRelationInput>;

    @Field(() => RatingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RatingWhereUniqueInput, 'id' | 'sellerId_buyerId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RatingScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RatingScalarFieldEnum>;
}
