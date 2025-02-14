import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityCreateWithoutPlanInput } from './community-create-without-plan.input';
import { Type } from 'class-transformer';
import { CommunityCreateOrConnectWithoutPlanInput } from './community-create-or-connect-without-plan.input';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';

@InputType()
export class CommunityCreateNestedOneWithoutPlanInput {

    @Field(() => CommunityCreateWithoutPlanInput, {nullable:true})
    @Type(() => CommunityCreateWithoutPlanInput)
    create?: CommunityCreateWithoutPlanInput;

    @Field(() => CommunityCreateOrConnectWithoutPlanInput, {nullable:true})
    @Type(() => CommunityCreateOrConnectWithoutPlanInput)
    connectOrCreate?: CommunityCreateOrConnectWithoutPlanInput;

    @Field(() => CommunityWhereUniqueInput, {nullable:true})
    @Type(() => CommunityWhereUniqueInput)
    connect?: Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>;
}
