import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MaterialEntryWhereInput } from './material-entry-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';
import { ProjectRelationFilter } from '../project/project-relation-filter.input';

@InputType()
export class MaterialEntryWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [MaterialEntryWhereInput], {nullable:true})
    AND?: Array<MaterialEntryWhereInput>;

    @Field(() => [MaterialEntryWhereInput], {nullable:true})
    OR?: Array<MaterialEntryWhereInput>;

    @Field(() => [MaterialEntryWhereInput], {nullable:true})
    NOT?: Array<MaterialEntryWhereInput>;

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

    @Field(() => UserNullableRelationFilter, {nullable:true})
    receivedBy?: UserNullableRelationFilter;

    @Field(() => ProjectRelationFilter, {nullable:true})
    project?: ProjectRelationFilter;
}
