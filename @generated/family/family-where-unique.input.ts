import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FamilyWhereInput } from './family-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { ContainerListRelationFilter } from '../container/container-list-relation-filter.input';

@InputType()
export class FamilyWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [FamilyWhereInput], {nullable:true})
    AND?: Array<FamilyWhereInput>;

    @Field(() => [FamilyWhereInput], {nullable:true})
    OR?: Array<FamilyWhereInput>;

    @Field(() => [FamilyWhereInput], {nullable:true})
    NOT?: Array<FamilyWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    members?: UserListRelationFilter;

    @Field(() => ContainerListRelationFilter, {nullable:true})
    containers?: ContainerListRelationFilter;
}
