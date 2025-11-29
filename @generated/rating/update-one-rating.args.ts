import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RatingUpdateInput } from './rating-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { RatingWhereUniqueInput } from './rating-where-unique.input';

@ArgsType()
export class UpdateOneRatingArgs {

    @Field(() => RatingUpdateInput, {nullable:false})
    @Type(() => RatingUpdateInput)
    data!: RatingUpdateInput;

    @Field(() => RatingWhereUniqueInput, {nullable:false})
    @Type(() => RatingWhereUniqueInput)
    where!: Prisma.AtLeast<RatingWhereUniqueInput, 'id' | 'sellerId_buyerId'>;
}
