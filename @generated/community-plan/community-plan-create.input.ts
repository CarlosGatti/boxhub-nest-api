import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CommunityCreateNestedOneWithoutPlanInput } from '../community/community-create-nested-one-without-plan.input';

@InputType()
export class CommunityPlanCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Float, {nullable:false})
    price!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    communityId?: number;

    @Field(() => CommunityCreateNestedOneWithoutPlanInput, {nullable:true})
    community?: CommunityCreateNestedOneWithoutPlanInput;
}
