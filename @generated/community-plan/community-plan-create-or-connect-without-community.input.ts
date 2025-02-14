import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunityPlanWhereUniqueInput } from './community-plan-where-unique.input';
import { Type } from 'class-transformer';
import { CommunityPlanCreateWithoutCommunityInput } from './community-plan-create-without-community.input';

@InputType()
export class CommunityPlanCreateOrConnectWithoutCommunityInput {

    @Field(() => CommunityPlanWhereUniqueInput, {nullable:false})
    @Type(() => CommunityPlanWhereUniqueInput)
    where!: Prisma.AtLeast<CommunityPlanWhereUniqueInput, 'id'>;

    @Field(() => CommunityPlanCreateWithoutCommunityInput, {nullable:false})
    @Type(() => CommunityPlanCreateWithoutCommunityInput)
    create!: CommunityPlanCreateWithoutCommunityInput;
}
