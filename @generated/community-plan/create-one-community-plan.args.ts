import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunityPlanCreateInput } from './community-plan-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCommunityPlanArgs {

    @Field(() => CommunityPlanCreateInput, {nullable:false})
    @Type(() => CommunityPlanCreateInput)
    data!: CommunityPlanCreateInput;
}
