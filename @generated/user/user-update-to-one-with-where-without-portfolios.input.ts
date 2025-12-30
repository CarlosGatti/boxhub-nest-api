import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutPortfoliosInput } from './user-update-without-portfolios.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutPortfoliosInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutPortfoliosInput, {nullable:false})
    @Type(() => UserUpdateWithoutPortfoliosInput)
    data!: UserUpdateWithoutPortfoliosInput;
}
