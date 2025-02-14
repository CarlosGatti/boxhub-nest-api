import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FollowsWhereUniqueInput } from './follows-where-unique.input';
import { Type } from 'class-transformer';
import { FollowsUpdateWithoutFollowerInput } from './follows-update-without-follower.input';
import { FollowsCreateWithoutFollowerInput } from './follows-create-without-follower.input';

@InputType()
export class FollowsUpsertWithWhereUniqueWithoutFollowerInput {

    @Field(() => FollowsWhereUniqueInput, {nullable:false})
    @Type(() => FollowsWhereUniqueInput)
    where!: Prisma.AtLeast<FollowsWhereUniqueInput, 'id'>;

    @Field(() => FollowsUpdateWithoutFollowerInput, {nullable:false})
    @Type(() => FollowsUpdateWithoutFollowerInput)
    update!: FollowsUpdateWithoutFollowerInput;

    @Field(() => FollowsCreateWithoutFollowerInput, {nullable:false})
    @Type(() => FollowsCreateWithoutFollowerInput)
    create!: FollowsCreateWithoutFollowerInput;
}
