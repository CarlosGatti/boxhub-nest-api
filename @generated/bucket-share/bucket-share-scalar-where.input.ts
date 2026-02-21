import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumBucketShareTypeFilter } from '../prisma/enum-bucket-share-type-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BucketShareScalarWhereInput {

    @Field(() => [BucketShareScalarWhereInput], {nullable:true})
    AND?: Array<BucketShareScalarWhereInput>;

    @Field(() => [BucketShareScalarWhereInput], {nullable:true})
    OR?: Array<BucketShareScalarWhereInput>;

    @Field(() => [BucketShareScalarWhereInput], {nullable:true})
    NOT?: Array<BucketShareScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    token?: StringFilter;

    @Field(() => EnumBucketShareTypeFilter, {nullable:true})
    type?: EnumBucketShareTypeFilter;

    @Field(() => JsonFilter, {nullable:true})
    payload?: JsonFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
