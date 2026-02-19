import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumBucketVisionItemTypeFilter } from '../prisma/enum-bucket-vision-item-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BucketVisionItemScalarWhereInput {

    @Field(() => [BucketVisionItemScalarWhereInput], {nullable:true})
    AND?: Array<BucketVisionItemScalarWhereInput>;

    @Field(() => [BucketVisionItemScalarWhereInput], {nullable:true})
    OR?: Array<BucketVisionItemScalarWhereInput>;

    @Field(() => [BucketVisionItemScalarWhereInput], {nullable:true})
    NOT?: Array<BucketVisionItemScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
}
