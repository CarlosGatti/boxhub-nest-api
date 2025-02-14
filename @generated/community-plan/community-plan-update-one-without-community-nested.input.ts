import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityPlanCreateWithoutCommunityInput } from './community-plan-create-without-community.input';
import { Type } from 'class-transformer';
import { CommunityPlanCreateOrConnectWithoutCommunityInput } from './community-plan-create-or-connect-without-community.input';
import { CommunityPlanUpsertWithoutCommunityInput } from './community-plan-upsert-without-community.input';
import { CommunityPlanWhereInput } from './community-plan-where.input';
import { Prisma } from '@prisma/client';
import { CommunityPlanWhereUniqueInput } from './community-plan-where-unique.input';
import { CommunityPlanUpdateToOneWithWhereWithoutCommunityInput } from './community-plan-update-to-one-with-where-without-community.input';

@InputType()
export class CommunityPlanUpdateOneWithoutCommunityNestedInput {

    @Field(() => CommunityPlanCreateWithoutCommunityInput, {nullable:true})
    @Type(() => CommunityPlanCreateWithoutCommunityInput)
    create?: CommunityPlanCreateWithoutCommunityInput;

    @Field(() => CommunityPlanCreateOrConnectWithoutCommunityInput, {nullable:true})
    @Type(() => CommunityPlanCreateOrConnectWithoutCommunityInput)
    connectOrCreate?: CommunityPlanCreateOrConnectWithoutCommunityInput;

    @Field(() => CommunityPlanUpsertWithoutCommunityInput, {nullable:true})
    @Type(() => CommunityPlanUpsertWithoutCommunityInput)
    upsert?: CommunityPlanUpsertWithoutCommunityInput;

    @Field(() => CommunityPlanWhereInput, {nullable:true})
    @Type(() => CommunityPlanWhereInput)
    disconnect?: CommunityPlanWhereInput;

    @Field(() => CommunityPlanWhereInput, {nullable:true})
    @Type(() => CommunityPlanWhereInput)
    delete?: CommunityPlanWhereInput;

    @Field(() => CommunityPlanWhereUniqueInput, {nullable:true})
    @Type(() => CommunityPlanWhereUniqueInput)
    connect?: Prisma.AtLeast<CommunityPlanWhereUniqueInput, 'id'>;

    @Field(() => CommunityPlanUpdateToOneWithWhereWithoutCommunityInput, {nullable:true})
    @Type(() => CommunityPlanUpdateToOneWithWhereWithoutCommunityInput)
    update?: CommunityPlanUpdateToOneWithWhereWithoutCommunityInput;
}
