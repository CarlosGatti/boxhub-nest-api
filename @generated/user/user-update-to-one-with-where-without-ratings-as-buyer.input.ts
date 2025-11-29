import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutRatingsAsBuyerInput } from './user-update-without-ratings-as-buyer.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutRatingsAsBuyerInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutRatingsAsBuyerInput, {nullable:false})
    @Type(() => UserUpdateWithoutRatingsAsBuyerInput)
    data!: UserUpdateWithoutRatingsAsBuyerInput;
}
