import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunityPlanUpdateManyMutationInput } from './community-plan-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CommunityPlanWhereInput } from './community-plan-where.input';

@ArgsType()
export class UpdateManyCommunityPlanArgs {

    @Field(() => CommunityPlanUpdateManyMutationInput, {nullable:false})
    @Type(() => CommunityPlanUpdateManyMutationInput)
    data!: CommunityPlanUpdateManyMutationInput;

    @Field(() => CommunityPlanWhereInput, {nullable:true})
    @Type(() => CommunityPlanWhereInput)
    where?: CommunityPlanWhereInput;
}
