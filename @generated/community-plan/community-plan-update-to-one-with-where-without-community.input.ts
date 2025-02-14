import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityPlanWhereInput } from './community-plan-where.input';
import { Type } from 'class-transformer';
import { CommunityPlanUpdateWithoutCommunityInput } from './community-plan-update-without-community.input';

@InputType()
export class CommunityPlanUpdateToOneWithWhereWithoutCommunityInput {

    @Field(() => CommunityPlanWhereInput, {nullable:true})
    @Type(() => CommunityPlanWhereInput)
    where?: CommunityPlanWhereInput;

    @Field(() => CommunityPlanUpdateWithoutCommunityInput, {nullable:false})
    @Type(() => CommunityPlanUpdateWithoutCommunityInput)
    data!: CommunityPlanUpdateWithoutCommunityInput;
}
