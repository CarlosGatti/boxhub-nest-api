import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedInternalNoteWhereInput } from './defined-internal-note-where.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DefinedClientNullableRelationFilter } from '../defined-client/defined-client-nullable-relation-filter.input';
import { DefinedProjectNullableRelationFilter } from '../defined-project/defined-project-nullable-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedInternalNoteWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [DefinedInternalNoteWhereInput], {nullable:true})
    AND?: Array<DefinedInternalNoteWhereInput>;

    @Field(() => [DefinedInternalNoteWhereInput], {nullable:true})
    OR?: Array<DefinedInternalNoteWhereInput>;

    @Field(() => [DefinedInternalNoteWhereInput], {nullable:true})
    NOT?: Array<DefinedInternalNoteWhereInput>;

    @Field(() => IntNullableFilter, {nullable:true})
    clientId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    projectId?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    authorId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    body?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DefinedClientNullableRelationFilter, {nullable:true})
    client?: DefinedClientNullableRelationFilter;

    @Field(() => DefinedProjectNullableRelationFilter, {nullable:true})
    project?: DefinedProjectNullableRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    author?: UserRelationFilter;
}
