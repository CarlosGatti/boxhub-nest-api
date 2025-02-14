import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FollowsUpdateInput } from './follows-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FollowsWhereUniqueInput } from './follows-where-unique.input';

@ArgsType()
export class UpdateOneFollowsArgs {

    @Field(() => FollowsUpdateInput, {nullable:false})
    @Type(() => FollowsUpdateInput)
    data!: FollowsUpdateInput;

    @Field(() => FollowsWhereUniqueInput, {nullable:false})
    @Type(() => FollowsWhereUniqueInput)
    where!: Prisma.AtLeast<FollowsWhereUniqueInput, 'id'>;
}
