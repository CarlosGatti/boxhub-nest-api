import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityCreateWithoutParentCommunityInput } from './community-create-without-parent-community.input';
import { Type } from 'class-transformer';
import { CommunityCreateOrConnectWithoutParentCommunityInput } from './community-create-or-connect-without-parent-community.input';
import { CommunityUpsertWithWhereUniqueWithoutParentCommunityInput } from './community-upsert-with-where-unique-without-parent-community.input';
import { CommunityCreateManyParentCommunityInputEnvelope } from './community-create-many-parent-community-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';
import { CommunityUpdateWithWhereUniqueWithoutParentCommunityInput } from './community-update-with-where-unique-without-parent-community.input';
import { CommunityUpdateManyWithWhereWithoutParentCommunityInput } from './community-update-many-with-where-without-parent-community.input';
import { CommunityScalarWhereInput } from './community-scalar-where.input';

@InputType()
export class CommunityUncheckedUpdateManyWithoutParentCommunityNestedInput {

    @Field(() => [CommunityCreateWithoutParentCommunityInput], {nullable:true})
    @Type(() => CommunityCreateWithoutParentCommunityInput)
    create?: Array<CommunityCreateWithoutParentCommunityInput>;

    @Field(() => [CommunityCreateOrConnectWithoutParentCommunityInput], {nullable:true})
    @Type(() => CommunityCreateOrConnectWithoutParentCommunityInput)
    connectOrCreate?: Array<CommunityCreateOrConnectWithoutParentCommunityInput>;

    @Field(() => [CommunityUpsertWithWhereUniqueWithoutParentCommunityInput], {nullable:true})
    @Type(() => CommunityUpsertWithWhereUniqueWithoutParentCommunityInput)
    upsert?: Array<CommunityUpsertWithWhereUniqueWithoutParentCommunityInput>;

    @Field(() => CommunityCreateManyParentCommunityInputEnvelope, {nullable:true})
    @Type(() => CommunityCreateManyParentCommunityInputEnvelope)
    createMany?: CommunityCreateManyParentCommunityInputEnvelope;

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

    @Field(() => [CommunityUpdateWithWhereUniqueWithoutParentCommunityInput], {nullable:true})
    @Type(() => CommunityUpdateWithWhereUniqueWithoutParentCommunityInput)
    update?: Array<CommunityUpdateWithWhereUniqueWithoutParentCommunityInput>;

    @Field(() => [CommunityUpdateManyWithWhereWithoutParentCommunityInput], {nullable:true})
    @Type(() => CommunityUpdateManyWithWhereWithoutParentCommunityInput)
    updateMany?: Array<CommunityUpdateManyWithWhereWithoutParentCommunityInput>;

    @Field(() => [CommunityScalarWhereInput], {nullable:true})
    @Type(() => CommunityScalarWhereInput)
    deleteMany?: Array<CommunityScalarWhereInput>;
}
