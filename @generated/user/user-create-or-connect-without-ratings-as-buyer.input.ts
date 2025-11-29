import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRatingsAsBuyerInput } from './user-create-without-ratings-as-buyer.input';

@InputType()
export class UserCreateOrConnectWithoutRatingsAsBuyerInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutRatingsAsBuyerInput, {nullable:false})
    @Type(() => UserCreateWithoutRatingsAsBuyerInput)
    create!: UserCreateWithoutRatingsAsBuyerInput;
}
