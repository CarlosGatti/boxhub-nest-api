import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumBucketVisionSectionTypeFilter } from '../prisma/enum-bucket-vision-section-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BucketVisionBoardRelationFilter } from '../bucket-vision-board/bucket-vision-board-relation-filter.input';

@InputType()
export class BucketVisionSectionWhereInput {

    @Field(() => [BucketVisionSectionWhereInput], {nullable:true})
    AND?: Array<BucketVisionSectionWhereInput>;

    @Field(() => [BucketVisionSectionWhereInput], {nullable:true})
    OR?: Array<BucketVisionSectionWhereInput>;

    @Field(() => [BucketVisionSectionWhereInput], {nullable:true})
    NOT?: Array<BucketVisionSectionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    boardId?: IntFilter;

    @Field(() => EnumBucketVisionSectionTypeFilter, {nullable:true})
    type?: EnumBucketVisionSectionTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    title?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    content?: JsonNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BucketVisionBoardRelationFilter, {nullable:true})
    board?: BucketVisionBoardRelationFilter;
}
