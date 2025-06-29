import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReceivedMaterialsInput } from './user-create-without-received-materials.input';

@InputType()
export class UserCreateOrConnectWithoutReceivedMaterialsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutReceivedMaterialsInput, {nullable:false})
    @Type(() => UserCreateWithoutReceivedMaterialsInput)
    create!: UserCreateWithoutReceivedMaterialsInput;
}
