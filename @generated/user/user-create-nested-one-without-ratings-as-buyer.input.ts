import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRatingsAsBuyerInput } from './user-create-without-ratings-as-buyer.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRatingsAsBuyerInput } from './user-create-or-connect-without-ratings-as-buyer.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutRatingsAsBuyerInput {

    @Field(() => UserCreateWithoutRatingsAsBuyerInput, {nullable:true})
    @Type(() => UserCreateWithoutRatingsAsBuyerInput)
    create?: UserCreateWithoutRatingsAsBuyerInput;

    @Field(() => UserCreateOrConnectWithoutRatingsAsBuyerInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRatingsAsBuyerInput)
    connectOrCreate?: UserCreateOrConnectWithoutRatingsAsBuyerInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
