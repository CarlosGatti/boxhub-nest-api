import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRatingsAsBuyerInput } from './user-create-without-ratings-as-buyer.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRatingsAsBuyerInput } from './user-create-or-connect-without-ratings-as-buyer.input';
import { UserUpsertWithoutRatingsAsBuyerInput } from './user-upsert-without-ratings-as-buyer.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutRatingsAsBuyerInput } from './user-update-to-one-with-where-without-ratings-as-buyer.input';

@InputType()
export class UserUpdateOneRequiredWithoutRatingsAsBuyerNestedInput {

    @Field(() => UserCreateWithoutRatingsAsBuyerInput, {nullable:true})
    @Type(() => UserCreateWithoutRatingsAsBuyerInput)
    create?: UserCreateWithoutRatingsAsBuyerInput;

    @Field(() => UserCreateOrConnectWithoutRatingsAsBuyerInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRatingsAsBuyerInput)
    connectOrCreate?: UserCreateOrConnectWithoutRatingsAsBuyerInput;

    @Field(() => UserUpsertWithoutRatingsAsBuyerInput, {nullable:true})
    @Type(() => UserUpsertWithoutRatingsAsBuyerInput)
    upsert?: UserUpsertWithoutRatingsAsBuyerInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutRatingsAsBuyerInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutRatingsAsBuyerInput)
    update?: UserUpdateToOneWithWhereWithoutRatingsAsBuyerInput;
}
