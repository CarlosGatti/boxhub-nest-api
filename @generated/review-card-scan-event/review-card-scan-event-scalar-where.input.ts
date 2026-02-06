import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ReviewCardScanEventScalarWhereInput {

    @Field(() => [ReviewCardScanEventScalarWhereInput], {nullable:true})
    AND?: Array<ReviewCardScanEventScalarWhereInput>;

    @Field(() => [ReviewCardScanEventScalarWhereInput], {nullable:true})
    OR?: Array<ReviewCardScanEventScalarWhereInput>;

    @Field(() => [ReviewCardScanEventScalarWhereInput], {nullable:true})
    NOT?: Array<ReviewCardScanEventScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    projectId?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ipHash?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userAgent?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    referer?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
