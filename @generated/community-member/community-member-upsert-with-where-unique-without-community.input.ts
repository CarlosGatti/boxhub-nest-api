import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunityMemberWhereUniqueInput } from './community-member-where-unique.input';
import { Type } from 'class-transformer';
import { CommunityMemberUpdateWithoutCommunityInput } from './community-member-update-without-community.input';
import { CommunityMemberCreateWithoutCommunityInput } from './community-member-create-without-community.input';

@InputType()
export class CommunityMemberUpsertWithWhereUniqueWithoutCommunityInput {

    @Field(() => CommunityMemberWhereUniqueInput, {nullable:false})
    @Type(() => CommunityMemberWhereUniqueInput)
    where!: Prisma.AtLeast<CommunityMemberWhereUniqueInput, 'id'>;

    @Field(() => CommunityMemberUpdateWithoutCommunityInput, {nullable:false})
    @Type(() => CommunityMemberUpdateWithoutCommunityInput)
    update!: CommunityMemberUpdateWithoutCommunityInput;

    @Field(() => CommunityMemberCreateWithoutCommunityInput, {nullable:false})
    @Type(() => CommunityMemberCreateWithoutCommunityInput)
    create!: CommunityMemberCreateWithoutCommunityInput;
}
