import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutDiscartItemsInput } from './user-update-without-discart-items.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDiscartItemsInput } from './user-create-without-discart-items.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutDiscartItemsInput {

    @Field(() => UserUpdateWithoutDiscartItemsInput, {nullable:false})
    @Type(() => UserUpdateWithoutDiscartItemsInput)
    update!: UserUpdateWithoutDiscartItemsInput;

    @Field(() => UserCreateWithoutDiscartItemsInput, {nullable:false})
    @Type(() => UserCreateWithoutDiscartItemsInput)
    create!: UserCreateWithoutDiscartItemsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
