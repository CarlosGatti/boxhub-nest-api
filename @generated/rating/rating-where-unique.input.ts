import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RatingSellerIdBuyerIdCompoundUniqueInput } from './rating-seller-id-buyer-id-compound-unique.input';
import { RatingWhereInput } from './rating-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class RatingWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => RatingSellerIdBuyerIdCompoundUniqueInput, {nullable:true})
    sellerId_buyerId?: RatingSellerIdBuyerIdCompoundUniqueInput;

    @Field(() => [RatingWhereInput], {nullable:true})
    AND?: Array<RatingWhereInput>;

    @Field(() => [RatingWhereInput], {nullable:true})
    OR?: Array<RatingWhereInput>;

    @Field(() => [RatingWhereInput], {nullable:true})
    NOT?: Array<RatingWhereInput>;

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
    @Type(() => UserRelationFilter)
    seller?: UserRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    buyer?: UserRelationFilter;
}
