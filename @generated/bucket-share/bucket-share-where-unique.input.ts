import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketShareWhereInput } from './bucket-share-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumBucketShareTypeFilter } from '../prisma/enum-bucket-share-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class BucketShareWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    token?: string;

    @Field(() => [BucketShareWhereInput], {nullable:true})
    AND?: Array<BucketShareWhereInput>;

    @Field(() => [BucketShareWhereInput], {nullable:true})
    OR?: Array<BucketShareWhereInput>;

    @Field(() => [BucketShareWhereInput], {nullable:true})
    NOT?: Array<BucketShareWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => EnumBucketShareTypeFilter, {nullable:true})
    type?: EnumBucketShareTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    title?: StringNullableFilter;

    @Field(() => JsonFilter, {nullable:true})
    payload?: JsonFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;
}
