import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPublicationsInput } from './user-update-without-publications.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPublicationsInput } from './user-create-without-publications.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutPublicationsInput {

    @Field(() => UserUpdateWithoutPublicationsInput, {nullable:false})
    @Type(() => UserUpdateWithoutPublicationsInput)
    update!: UserUpdateWithoutPublicationsInput;

    @Field(() => UserCreateWithoutPublicationsInput, {nullable:false})
    @Type(() => UserCreateWithoutPublicationsInput)
    create!: UserCreateWithoutPublicationsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
