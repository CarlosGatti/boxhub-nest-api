import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunityMemberWhereUniqueInput } from './community-member-where-unique.input';
import { Type } from 'class-transformer';
import { CommunityMemberUpdateWithoutCommunityInput } from './community-member-update-without-community.input';

@InputType()
export class CommunityMemberUpdateWithWhereUniqueWithoutCommunityInput {

    @Field(() => CommunityMemberWhereUniqueInput, {nullable:false})
    @Type(() => CommunityMemberWhereUniqueInput)
    where!: Prisma.AtLeast<CommunityMemberWhereUniqueInput, 'id'>;

    @Field(() => CommunityMemberUpdateWithoutCommunityInput, {nullable:false})
    @Type(() => CommunityMemberUpdateWithoutCommunityInput)
    data!: CommunityMemberUpdateWithoutCommunityInput;
}
