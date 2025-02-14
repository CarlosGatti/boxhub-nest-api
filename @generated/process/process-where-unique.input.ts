import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProcessWhereInput } from './process-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ThemeListRelationFilter } from '../theme/theme-list-relation-filter.input';
import { PillarRelationFilter } from '../pillar/pillar-relation-filter.input';

@InputType()
export class ProcessWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ProcessWhereInput], {nullable:true})
    AND?: Array<ProcessWhereInput>;

    @Field(() => [ProcessWhereInput], {nullable:true})
    OR?: Array<ProcessWhereInput>;

    @Field(() => [ProcessWhereInput], {nullable:true})
    NOT?: Array<ProcessWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    pillarId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ThemeListRelationFilter, {nullable:true})
    themes?: ThemeListRelationFilter;

    @Field(() => PillarRelationFilter, {nullable:true})
    pillar?: PillarRelationFilter;
}
