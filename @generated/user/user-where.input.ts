import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StorageMemberListRelationFilter } from '../storage-member/storage-member-list-relation-filter.input';
import { LogListRelationFilter } from '../log/log-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    nickname?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    public?: BoolFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    role?: EnumRoleFilter;

    @Field(() => BoolFilter, {nullable:true})
    emailVerified?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    profilePicture?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    about?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    linkedinUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    twitterUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    githubUrl?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPremium?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    subscriptionId?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    expiresAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    willExpireAt?: DateTimeNullableFilter;

    @Field(() => StorageMemberListRelationFilter, {nullable:true})
    storageMemberships?: StorageMemberListRelationFilter;

    @Field(() => LogListRelationFilter, {nullable:true})
    logs?: LogListRelationFilter;
}
