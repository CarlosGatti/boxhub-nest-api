import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DefinedClientNullableRelationFilter } from '../defined-client/defined-client-nullable-relation-filter.input';
import { Type } from 'class-transformer';
import { DefinedProjectNullableRelationFilter } from '../defined-project/defined-project-nullable-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class DefinedInternalNoteWhereInput {

    @Field(() => [DefinedInternalNoteWhereInput], {nullable:true})
    AND?: Array<DefinedInternalNoteWhereInput>;

    @Field(() => [DefinedInternalNoteWhereInput], {nullable:true})
    OR?: Array<DefinedInternalNoteWhereInput>;

    @Field(() => [DefinedInternalNoteWhereInput], {nullable:true})
    NOT?: Array<DefinedInternalNoteWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
    @Type(() => DefinedClientNullableRelationFilter)
    client?: DefinedClientNullableRelationFilter;

    @Field(() => DefinedProjectNullableRelationFilter, {nullable:true})
    @Type(() => DefinedProjectNullableRelationFilter)
    project?: DefinedProjectNullableRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    author?: UserRelationFilter;
}
