import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutFollowingInput } from '../user/user-create-nested-one-without-following.input';

@InputType()
export class FollowsCreateWithoutFollowingInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutFollowingInput, {nullable:false})
    follower!: UserCreateNestedOneWithoutFollowingInput;
}
