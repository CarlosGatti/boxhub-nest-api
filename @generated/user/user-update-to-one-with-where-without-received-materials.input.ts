import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutReceivedMaterialsInput } from './user-update-without-received-materials.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutReceivedMaterialsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutReceivedMaterialsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReceivedMaterialsInput)
    data!: UserUpdateWithoutReceivedMaterialsInput;
}
