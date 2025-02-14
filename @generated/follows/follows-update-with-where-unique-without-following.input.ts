import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FollowsWhereUniqueInput } from './follows-where-unique.input';
import { Type } from 'class-transformer';
import { FollowsUpdateWithoutFollowingInput } from './follows-update-without-following.input';

@InputType()
export class FollowsUpdateWithWhereUniqueWithoutFollowingInput {

    @Field(() => FollowsWhereUniqueInput, {nullable:false})
    @Type(() => FollowsWhereUniqueInput)
    where!: Prisma.AtLeast<FollowsWhereUniqueInput, 'id'>;

    @Field(() => FollowsUpdateWithoutFollowingInput, {nullable:false})
    @Type(() => FollowsUpdateWithoutFollowingInput)
    data!: FollowsUpdateWithoutFollowingInput;
}
