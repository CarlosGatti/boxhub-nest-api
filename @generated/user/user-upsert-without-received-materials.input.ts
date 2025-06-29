import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutReceivedMaterialsInput } from './user-update-without-received-materials.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReceivedMaterialsInput } from './user-create-without-received-materials.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutReceivedMaterialsInput {

    @Field(() => UserUpdateWithoutReceivedMaterialsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReceivedMaterialsInput)
    update!: UserUpdateWithoutReceivedMaterialsInput;

    @Field(() => UserCreateWithoutReceivedMaterialsInput, {nullable:false})
    @Type(() => UserCreateWithoutReceivedMaterialsInput)
    create!: UserCreateWithoutReceivedMaterialsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
