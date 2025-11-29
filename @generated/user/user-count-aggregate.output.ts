import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    password!: number;

    @Field(() => Int, {nullable:false})
    firstName!: number;

    @Field(() => Int, {nullable:false})
    lastName!: number;

    @Field(() => Int, {nullable:false})
    nickname!: number;

    @Field(() => Int, {nullable:false})
    public!: number;

    @Field(() => Int, {nullable:false})
    role!: number;

    @Field(() => Int, {nullable:false})
    emailVerified!: number;

    @Field(() => Int, {nullable:false})
    profilePicture!: number;

    @Field(() => Int, {nullable:false})
    about!: number;

    @Field(() => Int, {nullable:false})
    contactPhone!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    isPremium!: number;

    @Field(() => Int, {nullable:false})
    subscriptionId!: number;

    @Field(() => Int, {nullable:false})
    expiresAt!: number;

    @Field(() => Int, {nullable:false})
    willExpireAt!: number;

    @Field(() => Int, {nullable:false})
    apartment!: number;

    @Field(() => Int, {nullable:false})
    isApprovedResident!: number;

    @Field(() => Int, {nullable:false})
    isAdmin!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
