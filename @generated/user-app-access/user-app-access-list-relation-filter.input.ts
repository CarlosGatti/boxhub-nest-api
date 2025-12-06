import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAppAccessWhereInput } from './user-app-access-where.input';

@InputType()
export class UserAppAccessListRelationFilter {

    @Field(() => UserAppAccessWhereInput, {nullable:true})
    every?: UserAppAccessWhereInput;

    @Field(() => UserAppAccessWhereInput, {nullable:true})
    some?: UserAppAccessWhereInput;

    @Field(() => UserAppAccessWhereInput, {nullable:true})
    none?: UserAppAccessWhereInput;
}
