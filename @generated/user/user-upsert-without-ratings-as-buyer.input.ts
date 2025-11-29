import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutRatingsAsBuyerInput } from './user-update-without-ratings-as-buyer.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRatingsAsBuyerInput } from './user-create-without-ratings-as-buyer.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutRatingsAsBuyerInput {

    @Field(() => UserUpdateWithoutRatingsAsBuyerInput, {nullable:false})
    @Type(() => UserUpdateWithoutRatingsAsBuyerInput)
    update!: UserUpdateWithoutRatingsAsBuyerInput;

    @Field(() => UserCreateWithoutRatingsAsBuyerInput, {nullable:false})
    @Type(() => UserCreateWithoutRatingsAsBuyerInput)
    create!: UserCreateWithoutRatingsAsBuyerInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
