import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutAppsInput } from './user-update-without-apps.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutAppsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutAppsInput, {nullable:false})
    @Type(() => UserUpdateWithoutAppsInput)
    data!: UserUpdateWithoutAppsInput;
}
