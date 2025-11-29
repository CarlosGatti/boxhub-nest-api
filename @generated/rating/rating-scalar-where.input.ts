import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class RatingScalarWhereInput {

    @Field(() => [RatingScalarWhereInput], {nullable:true})
    AND?: Array<RatingScalarWhereInput>;

    @Field(() => [RatingScalarWhereInput], {nullable:true})
    OR?: Array<RatingScalarWhereInput>;

    @Field(() => [RatingScalarWhereInput], {nullable:true})
    NOT?: Array<RatingScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    sellerId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    buyerId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    stars?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    comment?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
