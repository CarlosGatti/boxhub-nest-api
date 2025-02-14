import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FollowsWhereUniqueInput } from './follows-where-unique.input';
import { Type } from 'class-transformer';
import { FollowsCreateWithoutFollowerInput } from './follows-create-without-follower.input';

@InputType()
export class FollowsCreateOrConnectWithoutFollowerInput {

    @Field(() => FollowsWhereUniqueInput, {nullable:false})
    @Type(() => FollowsWhereUniqueInput)
    where!: Prisma.AtLeast<FollowsWhereUniqueInput, 'id'>;

    @Field(() => FollowsCreateWithoutFollowerInput, {nullable:false})
    @Type(() => FollowsCreateWithoutFollowerInput)
    create!: FollowsCreateWithoutFollowerInput;
}
