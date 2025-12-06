import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAppAccessCreateNestedManyWithoutAppInput } from '../user-app-access/user-app-access-create-nested-many-without-app.input';

@InputType()
export class AppCreateInput {

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserAppAccessCreateNestedManyWithoutAppInput, {nullable:true})
    users?: UserAppAccessCreateNestedManyWithoutAppInput;
}
