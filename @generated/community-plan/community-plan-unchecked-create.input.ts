import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { CommunityUncheckedCreateNestedOneWithoutPlanInput } from '../community/community-unchecked-create-nested-one-without-plan.input';

@InputType()
export class CommunityPlanUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => CommunityUncheckedCreateNestedOneWithoutPlanInput, {nullable:true})
    community?: CommunityUncheckedCreateNestedOneWithoutPlanInput;
}
