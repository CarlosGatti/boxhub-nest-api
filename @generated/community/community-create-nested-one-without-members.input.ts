import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityCreateWithoutMembersInput } from './community-create-without-members.input';
import { Type } from 'class-transformer';
import { CommunityCreateOrConnectWithoutMembersInput } from './community-create-or-connect-without-members.input';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';

@InputType()
export class CommunityCreateNestedOneWithoutMembersInput {

    @Field(() => CommunityCreateWithoutMembersInput, {nullable:true})
    @Type(() => CommunityCreateWithoutMembersInput)
    create?: CommunityCreateWithoutMembersInput;

    @Field(() => CommunityCreateOrConnectWithoutMembersInput, {nullable:true})
    @Type(() => CommunityCreateOrConnectWithoutMembersInput)
    connectOrCreate?: CommunityCreateOrConnectWithoutMembersInput;

    @Field(() => CommunityWhereUniqueInput, {nullable:true})
    @Type(() => CommunityWhereUniqueInput)
    connect?: Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>;
}
