import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityCreateWithoutPlanInput } from './community-create-without-plan.input';
import { Type } from 'class-transformer';
import { CommunityCreateOrConnectWithoutPlanInput } from './community-create-or-connect-without-plan.input';
import { CommunityUpsertWithoutPlanInput } from './community-upsert-without-plan.input';
import { CommunityWhereInput } from './community-where.input';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';
import { CommunityUpdateToOneWithWhereWithoutPlanInput } from './community-update-to-one-with-where-without-plan.input';

@InputType()
export class CommunityUncheckedUpdateOneWithoutPlanNestedInput {

    @Field(() => CommunityCreateWithoutPlanInput, {nullable:true})
    @Type(() => CommunityCreateWithoutPlanInput)
    create?: CommunityCreateWithoutPlanInput;

    @Field(() => CommunityCreateOrConnectWithoutPlanInput, {nullable:true})
    @Type(() => CommunityCreateOrConnectWithoutPlanInput)
    connectOrCreate?: CommunityCreateOrConnectWithoutPlanInput;

    @Field(() => CommunityUpsertWithoutPlanInput, {nullable:true})
    @Type(() => CommunityUpsertWithoutPlanInput)
    upsert?: CommunityUpsertWithoutPlanInput;

    @Field(() => CommunityWhereInput, {nullable:true})
    @Type(() => CommunityWhereInput)
    disconnect?: CommunityWhereInput;

    @Field(() => CommunityWhereInput, {nullable:true})
    @Type(() => CommunityWhereInput)
    delete?: CommunityWhereInput;

    @Field(() => CommunityWhereUniqueInput, {nullable:true})
    @Type(() => CommunityWhereUniqueInput)
    connect?: Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>;

    @Field(() => CommunityUpdateToOneWithWhereWithoutPlanInput, {nullable:true})
    @Type(() => CommunityUpdateToOneWithWhereWithoutPlanInput)
    update?: CommunityUpdateToOneWithWhereWithoutPlanInput;
}
