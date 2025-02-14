import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunityPlanWhereInput } from './community-plan-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCommunityPlanArgs {

    @Field(() => CommunityPlanWhereInput, {nullable:true})
    @Type(() => CommunityPlanWhereInput)
    where?: CommunityPlanWhereInput;
}
