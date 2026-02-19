import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketVisionItemWhereInput } from './bucket-vision-item-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumBucketVisionItemTypeFilter } from '../prisma/enum-bucket-vision-item-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BucketVisionBoardRelationFilter } from '../bucket-vision-board/bucket-vision-board-relation-filter.input';

@InputType()
export class BucketVisionItemWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [BucketVisionItemWhereInput], {nullable:true})
    AND?: Array<BucketVisionItemWhereInput>;

    @Field(() => [BucketVisionItemWhereInput], {nullable:true})
    OR?: Array<BucketVisionItemWhereInput>;

    @Field(() => [BucketVisionItemWhereInput], {nullable:true})
    NOT?: Array<BucketVisionItemWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    boardId?: IntFilter;

    @Field(() => EnumBucketVisionItemTypeFilter, {nullable:true})
    type?: EnumBucketVisionItemTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    text?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    url?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    color?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    layout?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BucketVisionBoardRelationFilter, {nullable:true})
    board?: BucketVisionBoardRelationFilter;
}
