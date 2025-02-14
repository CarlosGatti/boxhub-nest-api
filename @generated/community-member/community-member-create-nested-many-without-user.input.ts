import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityMemberCreateWithoutUserInput } from './community-member-create-without-user.input';
import { Type } from 'class-transformer';
import { CommunityMemberCreateOrConnectWithoutUserInput } from './community-member-create-or-connect-without-user.input';
import { CommunityMemberCreateManyUserInputEnvelope } from './community-member-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommunityMemberWhereUniqueInput } from './community-member-where-unique.input';

@InputType()
export class CommunityMemberCreateNestedManyWithoutUserInput {

    @Field(() => [CommunityMemberCreateWithoutUserInput], {nullable:true})
    @Type(() => CommunityMemberCreateWithoutUserInput)
    create?: Array<CommunityMemberCreateWithoutUserInput>;

    @Field(() => [CommunityMemberCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CommunityMemberCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CommunityMemberCreateOrConnectWithoutUserInput>;

    @Field(() => CommunityMemberCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CommunityMemberCreateManyUserInputEnvelope)
    createMany?: CommunityMemberCreateManyUserInputEnvelope;

    @Field(() => [CommunityMemberWhereUniqueInput], {nullable:true})
    @Type(() => CommunityMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommunityMemberWhereUniqueInput, 'id'>>;
}
