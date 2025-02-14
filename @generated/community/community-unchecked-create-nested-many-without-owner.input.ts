import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityCreateWithoutOwnerInput } from './community-create-without-owner.input';
import { Type } from 'class-transformer';
import { CommunityCreateOrConnectWithoutOwnerInput } from './community-create-or-connect-without-owner.input';
import { CommunityCreateManyOwnerInputEnvelope } from './community-create-many-owner-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';

@InputType()
export class CommunityUncheckedCreateNestedManyWithoutOwnerInput {

    @Field(() => [CommunityCreateWithoutOwnerInput], {nullable:true})
    @Type(() => CommunityCreateWithoutOwnerInput)
    create?: Array<CommunityCreateWithoutOwnerInput>;

    @Field(() => [CommunityCreateOrConnectWithoutOwnerInput], {nullable:true})
    @Type(() => CommunityCreateOrConnectWithoutOwnerInput)
    connectOrCreate?: Array<CommunityCreateOrConnectWithoutOwnerInput>;

    @Field(() => CommunityCreateManyOwnerInputEnvelope, {nullable:true})
    @Type(() => CommunityCreateManyOwnerInputEnvelope)
    createMany?: CommunityCreateManyOwnerInputEnvelope;

    @Field(() => [CommunityWhereUniqueInput], {nullable:true})
    @Type(() => CommunityWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>>;
}
