import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ThemeWhereInput } from './theme-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProcessRelationFilter } from '../process/process-relation-filter.input';

@InputType()
export class ThemeWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ThemeWhereInput], {nullable:true})
    AND?: Array<ThemeWhereInput>;

    @Field(() => [ThemeWhereInput], {nullable:true})
    OR?: Array<ThemeWhereInput>;

    @Field(() => [ThemeWhereInput], {nullable:true})
    NOT?: Array<ThemeWhereInput>;

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
