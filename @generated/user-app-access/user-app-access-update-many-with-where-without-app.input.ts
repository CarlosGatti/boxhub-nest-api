import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAppAccessScalarWhereInput } from './user-app-access-scalar-where.input';
import { Type } from 'class-transformer';
import { UserAppAccessUpdateManyMutationInput } from './user-app-access-update-many-mutation.input';

@InputType()
export class UserAppAccessUpdateManyWithWhereWithoutAppInput {

    @Field(() => UserAppAccessScalarWhereInput, {nullable:false})
    @Type(() => UserAppAccessScalarWhereInput)
    where!: UserAppAccessScalarWhereInput;

    @Field(() => UserAppAccessUpdateManyMutationInput, {nullable:false})
    @Type(() => UserAppAccessUpdateManyMutationInput)
    data!: UserAppAccessUpdateManyMutationInput;
}
