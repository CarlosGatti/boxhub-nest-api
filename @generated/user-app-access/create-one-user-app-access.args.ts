import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAppAccessCreateInput } from './user-app-access-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserAppAccessArgs {

    @Field(() => UserAppAccessCreateInput, {nullable:false})
    @Type(() => UserAppAccessCreateInput)
    data!: UserAppAccessCreateInput;
}
