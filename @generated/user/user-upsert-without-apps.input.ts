import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAppsInput } from './user-update-without-apps.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAppsInput } from './user-create-without-apps.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutAppsInput {

    @Field(() => UserUpdateWithoutAppsInput, {nullable:false})
    @Type(() => UserUpdateWithoutAppsInput)
    update!: UserUpdateWithoutAppsInput;

    @Field(() => UserCreateWithoutAppsInput, {nullable:false})
    @Type(() => UserCreateWithoutAppsInput)
    create!: UserCreateWithoutAppsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
