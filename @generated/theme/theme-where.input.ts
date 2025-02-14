import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProcessRelationFilter } from '../process/process-relation-filter.input';

@InputType()
export class ThemeWhereInput {

    @Field(() => [ThemeWhereInput], {nullable:true})
    AND?: Array<ThemeWhereInput>;

    @Field(() => [ThemeWhereInput], {nullable:true})
    OR?: Array<ThemeWhereInput>;

    @Field(() => [ThemeWhereInput], {nullable:true})
    NOT?: Array<ThemeWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    processId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProcessRelationFilter, {nullable:true})
    process?: ProcessRelationFilter;
}
