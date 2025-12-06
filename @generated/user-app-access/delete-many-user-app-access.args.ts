import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAppAccessWhereInput } from './user-app-access-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserAppAccessArgs {

    @Field(() => UserAppAccessWhereInput, {nullable:true})
    @Type(() => UserAppAccessWhereInput)
    where?: UserAppAccessWhereInput;
}
