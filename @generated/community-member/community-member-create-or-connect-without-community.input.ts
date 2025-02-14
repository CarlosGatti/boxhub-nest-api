import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunityMemberWhereUniqueInput } from './community-member-where-unique.input';
import { Type } from 'class-transformer';
import { CommunityMemberCreateWithoutCommunityInput } from './community-member-create-without-community.input';

@InputType()
export class CommunityMemberCreateOrConnectWithoutCommunityInput {

    @Field(() => CommunityMemberWhereUniqueInput, {nullable:false})
    @Type(() => CommunityMemberWhereUniqueInput)
    where!: Prisma.AtLeast<CommunityMemberWhereUniqueInput, 'id'>;

    @Field(() => CommunityMemberCreateWithoutCommunityInput, {nullable:false})
    @Type(() => CommunityMemberCreateWithoutCommunityInput)
    create!: CommunityMemberCreateWithoutCommunityInput;
}
