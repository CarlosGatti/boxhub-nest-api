import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutFamilyInput } from './user-update-without-family.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutFamilyInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateWithoutFamilyInput, {nullable:false})
    @Type(() => UserUpdateWithoutFamilyInput)
    data!: UserUpdateWithoutFamilyInput;
}
