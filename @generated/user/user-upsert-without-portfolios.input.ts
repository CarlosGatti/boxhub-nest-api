import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPortfoliosInput } from './user-update-without-portfolios.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPortfoliosInput } from './user-create-without-portfolios.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutPortfoliosInput {

    @Field(() => UserUpdateWithoutPortfoliosInput, {nullable:false})
    @Type(() => UserUpdateWithoutPortfoliosInput)
    update!: UserUpdateWithoutPortfoliosInput;

    @Field(() => UserCreateWithoutPortfoliosInput, {nullable:false})
    @Type(() => UserCreateWithoutPortfoliosInput)
    create!: UserCreateWithoutPortfoliosInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
