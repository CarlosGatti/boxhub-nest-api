import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class RatingWhereInput {

    @Field(() => [RatingWhereInput], {nullable:true})
    AND?: Array<RatingWhereInput>;

    @Field(() => [RatingWhereInput], {nullable:true})
    OR?: Array<RatingWhereInput>;

    @Field(() => [RatingWhereInput], {nullable:true})
    NOT?: Array<RatingWhereInput>;

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

    @Field(() => UserRelationFilter, {nullable:true})
    seller?: UserRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    buyer?: UserRelationFilter;
}
