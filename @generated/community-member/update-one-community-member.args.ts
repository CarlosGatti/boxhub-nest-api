import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunityMemberUpdateInput } from './community-member-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CommunityMemberWhereUniqueInput } from './community-member-where-unique.input';

@ArgsType()
export class UpdateOneCommunityMemberArgs {

    @Field(() => CommunityMemberUpdateInput, {nullable:false})
    @Type(() => CommunityMemberUpdateInput)
    data!: CommunityMemberUpdateInput;

    @Field(() => CommunityMemberWhereUniqueInput, {nullable:false})
    @Type(() => CommunityMemberWhereUniqueInput)
    where!: Prisma.AtLeast<CommunityMemberWhereUniqueInput, 'id'>;
}
