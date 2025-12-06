import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAppAccessCreateManyInput } from './user-app-access-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserAppAccessArgs {

    @Field(() => [UserAppAccessCreateManyInput], {nullable:false})
    @Type(() => UserAppAccessCreateManyInput)
    data!: Array<UserAppAccessCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
