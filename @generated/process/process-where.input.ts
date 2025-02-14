import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ThemeListRelationFilter } from '../theme/theme-list-relation-filter.input';
import { PillarRelationFilter } from '../pillar/pillar-relation-filter.input';

@InputType()
export class ProcessWhereInput {

    @Field(() => [ProcessWhereInput], {nullable:true})
    AND?: Array<ProcessWhereInput>;

    @Field(() => [ProcessWhereInput], {nullable:true})
    OR?: Array<ProcessWhereInput>;

    @Field(() => [ProcessWhereInput], {nullable:true})
    NOT?: Array<ProcessWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
