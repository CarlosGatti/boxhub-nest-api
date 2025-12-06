import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAppAccessCreateManyUserInput } from './user-app-access-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserAppAccessCreateManyUserInputEnvelope {

    @Field(() => [UserAppAccessCreateManyUserInput], {nullable:false})
    @Type(() => UserAppAccessCreateManyUserInput)
    data!: Array<UserAppAccessCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
