import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAppAccessUpdateManyMutationInput } from './user-app-access-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserAppAccessWhereInput } from './user-app-access-where.input';

@ArgsType()
export class UpdateManyUserAppAccessArgs {

    @Field(() => UserAppAccessUpdateManyMutationInput, {nullable:false})
    @Type(() => UserAppAccessUpdateManyMutationInput)
    data!: UserAppAccessUpdateManyMutationInput;

    @Field(() => UserAppAccessWhereInput, {nullable:true})
    @Type(() => UserAppAccessWhereInput)
    where?: UserAppAccessWhereInput;
}
