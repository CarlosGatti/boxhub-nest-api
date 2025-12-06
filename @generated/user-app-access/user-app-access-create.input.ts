import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutAppsInput } from '../user/user-create-nested-one-without-apps.input';
import { AppCreateNestedOneWithoutUsersInput } from '../app/app-create-nested-one-without-users.input';

@InputType()
export class UserAppAccessCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutAppsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutAppsInput;

    @Field(() => AppCreateNestedOneWithoutUsersInput, {nullable:false})
    app!: AppCreateNestedOneWithoutUsersInput;
}
