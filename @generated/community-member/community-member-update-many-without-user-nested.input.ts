import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityMemberCreateWithoutUserInput } from './community-member-create-without-user.input';
import { Type } from 'class-transformer';
import { CommunityMemberCreateOrConnectWithoutUserInput } from './community-member-create-or-connect-without-user.input';
import { CommunityMemberUpsertWithWhereUniqueWithoutUserInput } from './community-member-upsert-with-where-unique-without-user.input';
import { CommunityMemberCreateManyUserInputEnvelope } from './community-member-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommunityMemberWhereUniqueInput } from './community-member-where-unique.input';
import { CommunityMemberUpdateWithWhereUniqueWithoutUserInput } from './community-member-update-with-where-unique-without-user.input';
import { CommunityMemberUpdateManyWithWhereWithoutUserInput } from './community-member-update-many-with-where-without-user.input';
import { CommunityMemberScalarWhereInput } from './community-member-scalar-where.input';

@InputType()
export class CommunityMemberUpdateManyWithoutUserNestedInput {

    @Field(() => [CommunityMemberCreateWithoutUserInput], {nullable:true})
    @Type(() => CommunityMemberCreateWithoutUserInput)
    create?: Array<CommunityMemberCreateWithoutUserInput>;

    @Field(() => [CommunityMemberCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CommunityMemberCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CommunityMemberCreateOrConnectWithoutUserInput>;

    @Field(() => [CommunityMemberUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CommunityMemberUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<CommunityMemberUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => CommunityMemberCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CommunityMemberCreateManyUserInputEnvelope)
    createMany?: CommunityMemberCreateManyUserInputEnvelope;

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

    @Field(() => [CommunityMemberUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CommunityMemberUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<CommunityMemberUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [CommunityMemberUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => CommunityMemberUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<CommunityMemberUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [CommunityMemberScalarWhereInput], {nullable:true})
    @Type(() => CommunityMemberScalarWhereInput)
    deleteMany?: Array<CommunityMemberScalarWhereInput>;
}
