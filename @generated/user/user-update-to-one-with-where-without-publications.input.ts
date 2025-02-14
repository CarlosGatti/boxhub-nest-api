import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutPublicationsInput } from './user-update-without-publications.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutPublicationsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutPublicationsInput, {nullable:false})
    @Type(() => UserUpdateWithoutPublicationsInput)
    data!: UserUpdateWithoutPublicationsInput;
}
