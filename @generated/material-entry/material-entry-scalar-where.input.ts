import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';

@InputType()
export class MaterialEntryScalarWhereInput {

    @Field(() => [MaterialEntryScalarWhereInput], {nullable:true})
    AND?: Array<MaterialEntryScalarWhereInput>;

    @Field(() => [MaterialEntryScalarWhereInput], {nullable:true})
    OR?: Array<MaterialEntryScalarWhereInput>;

    @Field(() => [MaterialEntryScalarWhereInput], {nullable:true})
    NOT?: Array<MaterialEntryScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    projectId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    supplier?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    quantity?: FloatFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    receivedById?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    receivedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    note?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    imageUrls?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
