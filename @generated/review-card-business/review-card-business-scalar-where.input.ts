import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ReviewCardBusinessScalarWhereInput {

    @Field(() => [ReviewCardBusinessScalarWhereInput], {nullable:true})
    AND?: Array<ReviewCardBusinessScalarWhereInput>;

    @Field(() => [ReviewCardBusinessScalarWhereInput], {nullable:true})
    OR?: Array<ReviewCardBusinessScalarWhereInput>;

    @Field(() => [ReviewCardBusinessScalarWhereInput], {nullable:true})
    NOT?: Array<ReviewCardBusinessScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    placeId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    googleReviewUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    website?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
