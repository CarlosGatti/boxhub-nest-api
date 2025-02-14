import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunityPlanCreateManyInput } from './community-plan-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCommunityPlanArgs {

    @Field(() => [CommunityPlanCreateManyInput], {nullable:false})
    @Type(() => CommunityPlanCreateManyInput)
    data!: Array<CommunityPlanCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
