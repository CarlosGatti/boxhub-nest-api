import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutDiscartItemsInput } from './user-update-without-discart-items.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutDiscartItemsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutDiscartItemsInput, {nullable:false})
    @Type(() => UserUpdateWithoutDiscartItemsInput)
    data!: UserUpdateWithoutDiscartItemsInput;
}
