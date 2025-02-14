import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityUpdateWithoutPlanInput } from './community-update-without-plan.input';
import { Type } from 'class-transformer';
import { CommunityCreateWithoutPlanInput } from './community-create-without-plan.input';
import { CommunityWhereInput } from './community-where.input';

@InputType()
export class CommunityUpsertWithoutPlanInput {

    @Field(() => CommunityUpdateWithoutPlanInput, {nullable:false})
    @Type(() => CommunityUpdateWithoutPlanInput)
    update!: CommunityUpdateWithoutPlanInput;

    @Field(() => CommunityCreateWithoutPlanInput, {nullable:false})
    @Type(() => CommunityCreateWithoutPlanInput)
    create!: CommunityCreateWithoutPlanInput;

    @Field(() => CommunityWhereInput, {nullable:true})
    @Type(() => CommunityWhereInput)
    where?: CommunityWhereInput;
}
