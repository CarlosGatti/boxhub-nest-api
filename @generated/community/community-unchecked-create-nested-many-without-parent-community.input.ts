import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityCreateWithoutParentCommunityInput } from './community-create-without-parent-community.input';
import { Type } from 'class-transformer';
import { CommunityCreateOrConnectWithoutParentCommunityInput } from './community-create-or-connect-without-parent-community.input';
import { CommunityCreateManyParentCommunityInputEnvelope } from './community-create-many-parent-community-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';

@InputType()
export class CommunityUncheckedCreateNestedManyWithoutParentCommunityInput {

    @Field(() => [CommunityCreateWithoutParentCommunityInput], {nullable:true})
    @Type(() => CommunityCreateWithoutParentCommunityInput)
    create?: Array<CommunityCreateWithoutParentCommunityInput>;

    @Field(() => [CommunityCreateOrConnectWithoutParentCommunityInput], {nullable:true})
    @Type(() => CommunityCreateOrConnectWithoutParentCommunityInput)
    connectOrCreate?: Array<CommunityCreateOrConnectWithoutParentCommunityInput>;

    @Field(() => CommunityCreateManyParentCommunityInputEnvelope, {nullable:true})
    @Type(() => CommunityCreateManyParentCommunityInputEnvelope)
    createMany?: CommunityCreateManyParentCommunityInputEnvelope;

    @Field(() => [CommunityWhereUniqueInput], {nullable:true})
    @Type(() => CommunityWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>>;
}
