import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RatingWhereUniqueInput } from './rating-where-unique.input';
import { Type } from 'class-transformer';
import { RatingCreateInput } from './rating-create.input';
import { RatingUpdateInput } from './rating-update.input';

@ArgsType()
export class UpsertOneRatingArgs {

    @Field(() => RatingWhereUniqueInput, {nullable:false})
    @Type(() => RatingWhereUniqueInput)
    where!: Prisma.AtLeast<RatingWhereUniqueInput, 'id' | 'sellerId_buyerId'>;

    @Field(() => RatingCreateInput, {nullable:false})
    @Type(() => RatingCreateInput)
    create!: RatingCreateInput;

    @Field(() => RatingUpdateInput, {nullable:false})
    @Type(() => RatingUpdateInput)
    update!: RatingUpdateInput;
}
