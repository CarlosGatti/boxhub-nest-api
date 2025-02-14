import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunityMemberWhereUniqueInput } from './community-member-where-unique.input';
import { Type } from 'class-transformer';
import { CommunityMemberCreateInput } from './community-member-create.input';
import { CommunityMemberUpdateInput } from './community-member-update.input';

@ArgsType()
export class UpsertOneCommunityMemberArgs {

    @Field(() => CommunityMemberWhereUniqueInput, {nullable:false})
    @Type(() => CommunityMemberWhereUniqueInput)
    where!: Prisma.AtLeast<CommunityMemberWhereUniqueInput, 'id'>;

    @Field(() => CommunityMemberCreateInput, {nullable:false})
    @Type(() => CommunityMemberCreateInput)
    create!: CommunityMemberCreateInput;

    @Field(() => CommunityMemberUpdateInput, {nullable:false})
    @Type(() => CommunityMemberUpdateInput)
    update!: CommunityMemberUpdateInput;
}
