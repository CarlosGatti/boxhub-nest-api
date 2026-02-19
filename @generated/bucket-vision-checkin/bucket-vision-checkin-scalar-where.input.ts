import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BucketVisionCheckinScalarWhereInput {

    @Field(() => [BucketVisionCheckinScalarWhereInput], {nullable:true})
    AND?: Array<BucketVisionCheckinScalarWhereInput>;

    @Field(() => [BucketVisionCheckinScalarWhereInput], {nullable:true})
    OR?: Array<BucketVisionCheckinScalarWhereInput>;

    @Field(() => [BucketVisionCheckinScalarWhereInput], {nullable:true})
    NOT?: Array<BucketVisionCheckinScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    boardId?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    kind?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    notes?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    mood?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    snapshot?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
