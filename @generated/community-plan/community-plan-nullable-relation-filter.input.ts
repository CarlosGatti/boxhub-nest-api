import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityPlanWhereInput } from './community-plan-where.input';

@InputType()
export class CommunityPlanNullableRelationFilter {

    @Field(() => CommunityPlanWhereInput, {nullable:true})
    is?: CommunityPlanWhereInput;

    @Field(() => CommunityPlanWhereInput, {nullable:true})
    isNot?: CommunityPlanWhereInput;
}
