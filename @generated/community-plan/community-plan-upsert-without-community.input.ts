import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityPlanUpdateWithoutCommunityInput } from './community-plan-update-without-community.input';
import { Type } from 'class-transformer';
import { CommunityPlanCreateWithoutCommunityInput } from './community-plan-create-without-community.input';
import { CommunityPlanWhereInput } from './community-plan-where.input';

@InputType()
export class CommunityPlanUpsertWithoutCommunityInput {

    @Field(() => CommunityPlanUpdateWithoutCommunityInput, {nullable:false})
    @Type(() => CommunityPlanUpdateWithoutCommunityInput)
    update!: CommunityPlanUpdateWithoutCommunityInput;

    @Field(() => CommunityPlanCreateWithoutCommunityInput, {nullable:false})
    @Type(() => CommunityPlanCreateWithoutCommunityInput)
    create!: CommunityPlanCreateWithoutCommunityInput;

    @Field(() => CommunityPlanWhereInput, {nullable:true})
    @Type(() => CommunityPlanWhereInput)
    where?: CommunityPlanWhereInput;
}
