import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';
import { Type } from 'class-transformer';
import { CommunityUpdateWithoutParentCommunityInput } from './community-update-without-parent-community.input';

@InputType()
export class CommunityUpdateWithWhereUniqueWithoutParentCommunityInput {

    @Field(() => CommunityWhereUniqueInput, {nullable:false})
    @Type(() => CommunityWhereUniqueInput)
    where!: Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>;

    @Field(() => CommunityUpdateWithoutParentCommunityInput, {nullable:false})
    @Type(() => CommunityUpdateWithoutParentCommunityInput)
    data!: CommunityUpdateWithoutParentCommunityInput;
}
