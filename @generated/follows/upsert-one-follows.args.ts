import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FollowsWhereUniqueInput } from './follows-where-unique.input';
import { Type } from 'class-transformer';
import { FollowsCreateInput } from './follows-create.input';
import { FollowsUpdateInput } from './follows-update.input';

@ArgsType()
export class UpsertOneFollowsArgs {

    @Field(() => FollowsWhereUniqueInput, {nullable:false})
    @Type(() => FollowsWhereUniqueInput)
    where!: Prisma.AtLeast<FollowsWhereUniqueInput, 'id'>;

    @Field(() => FollowsCreateInput, {nullable:false})
    @Type(() => FollowsCreateInput)
    create!: FollowsCreateInput;

    @Field(() => FollowsUpdateInput, {nullable:false})
    @Type(() => FollowsUpdateInput)
    update!: FollowsUpdateInput;
}
