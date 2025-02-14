import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';
import { Type } from 'class-transformer';
import { CommunityCreateWithoutParentCommunityInput } from './community-create-without-parent-community.input';

@InputType()
export class CommunityCreateOrConnectWithoutParentCommunityInput {

    @Field(() => CommunityWhereUniqueInput, {nullable:false})
    @Type(() => CommunityWhereUniqueInput)
    where!: Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>;

    @Field(() => CommunityCreateWithoutParentCommunityInput, {nullable:false})
    @Type(() => CommunityCreateWithoutParentCommunityInput)
    create!: CommunityCreateWithoutParentCommunityInput;
}
