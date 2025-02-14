import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';
import { Type } from 'class-transformer';
import { CommunityCreateWithoutMembersInput } from './community-create-without-members.input';

@InputType()
export class CommunityCreateOrConnectWithoutMembersInput {

    @Field(() => CommunityWhereUniqueInput, {nullable:false})
    @Type(() => CommunityWhereUniqueInput)
    where!: Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>;

    @Field(() => CommunityCreateWithoutMembersInput, {nullable:false})
    @Type(() => CommunityCreateWithoutMembersInput)
    create!: CommunityCreateWithoutMembersInput;
}
