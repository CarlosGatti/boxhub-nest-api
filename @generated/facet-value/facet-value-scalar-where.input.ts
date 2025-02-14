import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class FacetValueScalarWhereInput {

    @Field(() => [FacetValueScalarWhereInput], {nullable:true})
    AND?: Array<FacetValueScalarWhereInput>;

    @Field(() => [FacetValueScalarWhereInput], {nullable:true})
    OR?: Array<FacetValueScalarWhereInput>;

    @Field(() => [FacetValueScalarWhereInput], {nullable:true})
    NOT?: Array<FacetValueScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    value?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    facetId?: IntNullableFilter;
}
