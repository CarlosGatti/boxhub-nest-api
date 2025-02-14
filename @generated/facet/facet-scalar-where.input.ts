import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class FacetScalarWhereInput {

    @Field(() => [FacetScalarWhereInput], {nullable:true})
    AND?: Array<FacetScalarWhereInput>;

    @Field(() => [FacetScalarWhereInput], {nullable:true})
    OR?: Array<FacetScalarWhereInput>;

    @Field(() => [FacetScalarWhereInput], {nullable:true})
    NOT?: Array<FacetScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    communityId?: IntNullableFilter;
}
