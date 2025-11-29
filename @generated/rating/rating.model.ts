import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Rating {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    sellerId!: number;

    @Field(() => Int, {nullable:false})
    buyerId!: number;

    @Field(() => Int, {nullable:false})
    stars!: number;

    @Field(() => String, {nullable:true})
    comment!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => User, {nullable:false})
    seller?: User;

    @Field(() => User, {nullable:false})
    buyer?: User;
}
