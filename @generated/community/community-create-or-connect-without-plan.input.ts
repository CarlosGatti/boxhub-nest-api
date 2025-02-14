import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';
import { Type } from 'class-transformer';
import { CommunityCreateWithoutPlanInput } from './community-create-without-plan.input';

@InputType()
export class CommunityCreateOrConnectWithoutPlanInput {

    @Field(() => CommunityWhereUniqueInput, {nullable:false})
    @Type(() => CommunityWhereUniqueInput)
    where!: Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>;

    @Field(() => CommunityCreateWithoutPlanInput, {nullable:false})
    @Type(() => CommunityCreateWithoutPlanInput)
    create!: CommunityCreateWithoutPlanInput;
}
