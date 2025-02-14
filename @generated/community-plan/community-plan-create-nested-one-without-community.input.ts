import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityPlanCreateWithoutCommunityInput } from './community-plan-create-without-community.input';
import { Type } from 'class-transformer';
import { CommunityPlanCreateOrConnectWithoutCommunityInput } from './community-plan-create-or-connect-without-community.input';
import { Prisma } from '@prisma/client';
import { CommunityPlanWhereUniqueInput } from './community-plan-where-unique.input';

@InputType()
export class CommunityPlanCreateNestedOneWithoutCommunityInput {

    @Field(() => CommunityPlanCreateWithoutCommunityInput, {nullable:true})
    @Type(() => CommunityPlanCreateWithoutCommunityInput)
    create?: CommunityPlanCreateWithoutCommunityInput;

    @Field(() => CommunityPlanCreateOrConnectWithoutCommunityInput, {nullable:true})
    @Type(() => CommunityPlanCreateOrConnectWithoutCommunityInput)
    connectOrCreate?: CommunityPlanCreateOrConnectWithoutCommunityInput;

    @Field(() => CommunityPlanWhereUniqueInput, {nullable:true})
    @Type(() => CommunityPlanWhereUniqueInput)
    connect?: Prisma.AtLeast<CommunityPlanWhereUniqueInput, 'id'>;
}
