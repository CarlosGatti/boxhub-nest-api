import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityMemberCreateWithoutCommunityInput } from './community-member-create-without-community.input';
import { Type } from 'class-transformer';
import { CommunityMemberCreateOrConnectWithoutCommunityInput } from './community-member-create-or-connect-without-community.input';
import { CommunityMemberUpsertWithWhereUniqueWithoutCommunityInput } from './community-member-upsert-with-where-unique-without-community.input';
import { CommunityMemberCreateManyCommunityInputEnvelope } from './community-member-create-many-community-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommunityMemberWhereUniqueInput } from './community-member-where-unique.input';
import { CommunityMemberUpdateWithWhereUniqueWithoutCommunityInput } from './community-member-update-with-where-unique-without-community.input';
import { CommunityMemberUpdateManyWithWhereWithoutCommunityInput } from './community-member-update-many-with-where-without-community.input';
import { CommunityMemberScalarWhereInput } from './community-member-scalar-where.input';

@InputType()
export class CommunityMemberUpdateManyWithoutCommunityNestedInput {

    @Field(() => [CommunityMemberCreateWithoutCommunityInput], {nullable:true})
    @Type(() => CommunityMemberCreateWithoutCommunityInput)
    create?: Array<CommunityMemberCreateWithoutCommunityInput>;

    @Field(() => [CommunityMemberCreateOrConnectWithoutCommunityInput], {nullable:true})
    @Type(() => CommunityMemberCreateOrConnectWithoutCommunityInput)
    connectOrCreate?: Array<CommunityMemberCreateOrConnectWithoutCommunityInput>;

    @Field(() => [CommunityMemberUpsertWithWhereUniqueWithoutCommunityInput], {nullable:true})
    @Type(() => CommunityMemberUpsertWithWhereUniqueWithoutCommunityInput)
    upsert?: Array<CommunityMemberUpsertWithWhereUniqueWithoutCommunityInput>;

    @Field(() => CommunityMemberCreateManyCommunityInputEnvelope, {nullable:true})
    @Type(() => CommunityMemberCreateManyCommunityInputEnvelope)
    createMany?: CommunityMemberCreateManyCommunityInputEnvelope;

    @Field(() => [CommunityMemberWhereUniqueInput], {nullable:true})
    @Type(() => CommunityMemberWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommunityMemberWhereUniqueInput, 'id'>>;

    @Field(() => [CommunityMemberWhereUniqueInput], {nullable:true})
    @Type(() => CommunityMemberWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommunityMemberWhereUniqueInput, 'id'>>;

    @Field(() => [CommunityMemberWhereUniqueInput], {nullable:true})
    @Type(() => CommunityMemberWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommunityMemberWhereUniqueInput, 'id'>>;

    @Field(() => [CommunityMemberWhereUniqueInput], {nullable:true})
    @Type(() => CommunityMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommunityMemberWhereUniqueInput, 'id'>>;

    @Field(() => [CommunityMemberUpdateWithWhereUniqueWithoutCommunityInput], {nullable:true})
    @Type(() => CommunityMemberUpdateWithWhereUniqueWithoutCommunityInput)
    update?: Array<CommunityMemberUpdateWithWhereUniqueWithoutCommunityInput>;

    @Field(() => [CommunityMemberUpdateManyWithWhereWithoutCommunityInput], {nullable:true})
    @Type(() => CommunityMemberUpdateManyWithWhereWithoutCommunityInput)
    updateMany?: Array<CommunityMemberUpdateManyWithWhereWithoutCommunityInput>;

    @Field(() => [CommunityMemberScalarWhereInput], {nullable:true})
    @Type(() => CommunityMemberScalarWhereInput)
    deleteMany?: Array<CommunityMemberScalarWhereInput>;
}
