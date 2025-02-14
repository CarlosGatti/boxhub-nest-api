import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FollowsWhereUniqueInput } from './follows-where-unique.input';
import { Type } from 'class-transformer';
import { FollowsCreateWithoutFollowingInput } from './follows-create-without-following.input';

@InputType()
export class FollowsCreateOrConnectWithoutFollowingInput {

    @Field(() => FollowsWhereUniqueInput, {nullable:false})
    @Type(() => FollowsWhereUniqueInput)
    where!: Prisma.AtLeast<FollowsWhereUniqueInput, 'id'>;

    @Field(() => FollowsCreateWithoutFollowingInput, {nullable:false})
    @Type(() => FollowsCreateWithoutFollowingInput)
    create!: FollowsCreateWithoutFollowingInput;
}
