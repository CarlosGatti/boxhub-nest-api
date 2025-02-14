import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityMemberCreateWithoutCommunityInput } from './community-member-create-without-community.input';
import { Type } from 'class-transformer';
import { CommunityMemberCreateOrConnectWithoutCommunityInput } from './community-member-create-or-connect-without-community.input';
import { CommunityMemberCreateManyCommunityInputEnvelope } from './community-member-create-many-community-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommunityMemberWhereUniqueInput } from './community-member-where-unique.input';

@InputType()
export class CommunityMemberUncheckedCreateNestedManyWithoutCommunityInput {

    @Field(() => [CommunityMemberCreateWithoutCommunityInput], {nullable:true})
    @Type(() => CommunityMemberCreateWithoutCommunityInput)
    create?: Array<CommunityMemberCreateWithoutCommunityInput>;

    @Field(() => [CommunityMemberCreateOrConnectWithoutCommunityInput], {nullable:true})
    @Type(() => CommunityMemberCreateOrConnectWithoutCommunityInput)
    connectOrCreate?: Array<CommunityMemberCreateOrConnectWithoutCommunityInput>;

    @Field(() => CommunityMemberCreateManyCommunityInputEnvelope, {nullable:true})
    @Type(() => CommunityMemberCreateManyCommunityInputEnvelope)
    createMany?: CommunityMemberCreateManyCommunityInputEnvelope;

    @Field(() => [CommunityMemberWhereUniqueInput], {nullable:true})
    @Type(() => CommunityMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommunityMemberWhereUniqueInput, 'id'>>;
}
