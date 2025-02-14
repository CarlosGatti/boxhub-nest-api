import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FollowsWhereUniqueInput } from './follows-where-unique.input';
import { Type } from 'class-transformer';
import { FollowsUpdateWithoutFollowingInput } from './follows-update-without-following.input';
import { FollowsCreateWithoutFollowingInput } from './follows-create-without-following.input';

@InputType()
export class FollowsUpsertWithWhereUniqueWithoutFollowingInput {

    @Field(() => FollowsWhereUniqueInput, {nullable:false})
    @Type(() => FollowsWhereUniqueInput)
    where!: Prisma.AtLeast<FollowsWhereUniqueInput, 'id'>;

    @Field(() => FollowsUpdateWithoutFollowingInput, {nullable:false})
    @Type(() => FollowsUpdateWithoutFollowingInput)
    update!: FollowsUpdateWithoutFollowingInput;

    @Field(() => FollowsCreateWithoutFollowingInput, {nullable:false})
    @Type(() => FollowsCreateWithoutFollowingInput)
    create!: FollowsCreateWithoutFollowingInput;
}
