import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityCreateWithoutOwnerInput } from './community-create-without-owner.input';
import { Type } from 'class-transformer';
import { CommunityCreateOrConnectWithoutOwnerInput } from './community-create-or-connect-without-owner.input';
import { CommunityUpsertWithWhereUniqueWithoutOwnerInput } from './community-upsert-with-where-unique-without-owner.input';
import { CommunityCreateManyOwnerInputEnvelope } from './community-create-many-owner-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';
import { CommunityUpdateWithWhereUniqueWithoutOwnerInput } from './community-update-with-where-unique-without-owner.input';
import { CommunityUpdateManyWithWhereWithoutOwnerInput } from './community-update-many-with-where-without-owner.input';
import { CommunityScalarWhereInput } from './community-scalar-where.input';

@InputType()
export class CommunityUpdateManyWithoutOwnerNestedInput {

    @Field(() => [CommunityCreateWithoutOwnerInput], {nullable:true})
    @Type(() => CommunityCreateWithoutOwnerInput)
    create?: Array<CommunityCreateWithoutOwnerInput>;

    @Field(() => [CommunityCreateOrConnectWithoutOwnerInput], {nullable:true})
    @Type(() => CommunityCreateOrConnectWithoutOwnerInput)
    connectOrCreate?: Array<CommunityCreateOrConnectWithoutOwnerInput>;

    @Field(() => [CommunityUpsertWithWhereUniqueWithoutOwnerInput], {nullable:true})
    @Type(() => CommunityUpsertWithWhereUniqueWithoutOwnerInput)
    upsert?: Array<CommunityUpsertWithWhereUniqueWithoutOwnerInput>;

    @Field(() => CommunityCreateManyOwnerInputEnvelope, {nullable:true})
    @Type(() => CommunityCreateManyOwnerInputEnvelope)
    createMany?: CommunityCreateManyOwnerInputEnvelope;

    @Field(() => [CommunityWhereUniqueInput], {nullable:true})
    @Type(() => CommunityWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>>;

    @Field(() => [CommunityWhereUniqueInput], {nullable:true})
    @Type(() => CommunityWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>>;

    @Field(() => [CommunityWhereUniqueInput], {nullable:true})
    @Type(() => CommunityWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>>;

    @Field(() => [CommunityWhereUniqueInput], {nullable:true})
    @Type(() => CommunityWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>>;

    @Field(() => [CommunityUpdateWithWhereUniqueWithoutOwnerInput], {nullable:true})
    @Type(() => CommunityUpdateWithWhereUniqueWithoutOwnerInput)
    update?: Array<CommunityUpdateWithWhereUniqueWithoutOwnerInput>;

    @Field(() => [CommunityUpdateManyWithWhereWithoutOwnerInput], {nullable:true})
    @Type(() => CommunityUpdateManyWithWhereWithoutOwnerInput)
    updateMany?: Array<CommunityUpdateManyWithWhereWithoutOwnerInput>;

    @Field(() => [CommunityScalarWhereInput], {nullable:true})
    @Type(() => CommunityScalarWhereInput)
    deleteMany?: Array<CommunityScalarWhereInput>;
}
