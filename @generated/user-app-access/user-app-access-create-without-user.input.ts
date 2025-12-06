import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppCreateNestedOneWithoutUsersInput } from '../app/app-create-nested-one-without-users.input';

@InputType()
export class UserAppAccessCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AppCreateNestedOneWithoutUsersInput, {nullable:false})
    app!: AppCreateNestedOneWithoutUsersInput;
}
