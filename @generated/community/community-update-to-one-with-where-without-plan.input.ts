import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityWhereInput } from './community-where.input';
import { Type } from 'class-transformer';
import { CommunityUpdateWithoutPlanInput } from './community-update-without-plan.input';

@InputType()
export class CommunityUpdateToOneWithWhereWithoutPlanInput {

    @Field(() => CommunityWhereInput, {nullable:true})
    @Type(() => CommunityWhereInput)
    where?: CommunityWhereInput;

    @Field(() => CommunityUpdateWithoutPlanInput, {nullable:false})
    @Type(() => CommunityUpdateWithoutPlanInput)
    data!: CommunityUpdateWithoutPlanInput;
}
