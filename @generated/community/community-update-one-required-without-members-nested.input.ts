import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityCreateWithoutMembersInput } from './community-create-without-members.input';
import { Type } from 'class-transformer';
import { CommunityCreateOrConnectWithoutMembersInput } from './community-create-or-connect-without-members.input';
import { CommunityUpsertWithoutMembersInput } from './community-upsert-without-members.input';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';
import { CommunityUpdateToOneWithWhereWithoutMembersInput } from './community-update-to-one-with-where-without-members.input';

@InputType()
export class CommunityUpdateOneRequiredWithoutMembersNestedInput {

    @Field(() => CommunityCreateWithoutMembersInput, {nullable:true})
    @Type(() => CommunityCreateWithoutMembersInput)
    create?: CommunityCreateWithoutMembersInput;

    @Field(() => CommunityCreateOrConnectWithoutMembersInput, {nullable:true})
    @Type(() => CommunityCreateOrConnectWithoutMembersInput)
    connectOrCreate?: CommunityCreateOrConnectWithoutMembersInput;

    @Field(() => CommunityUpsertWithoutMembersInput, {nullable:true})
    @Type(() => CommunityUpsertWithoutMembersInput)
    upsert?: CommunityUpsertWithoutMembersInput;

    @Field(() => CommunityWhereUniqueInput, {nullable:true})
    @Type(() => CommunityWhereUniqueInput)
    connect?: Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>;

    @Field(() => CommunityUpdateToOneWithWhereWithoutMembersInput, {nullable:true})
    @Type(() => CommunityUpdateToOneWithWhereWithoutMembersInput)
    update?: CommunityUpdateToOneWithWhereWithoutMembersInput;
}
