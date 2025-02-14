import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FollowsWhereInput } from './follows-where.input';
import { Type } from 'class-transformer';
import { FollowsOrderByWithRelationInput } from './follows-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FollowsWhereUniqueInput } from './follows-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FollowsScalarFieldEnum } from './follows-scalar-field.enum';

@ArgsType()
export class FindFirstFollowsArgs {

    @Field(() => FollowsWhereInput, {nullable:true})
    @Type(() => FollowsWhereInput)
    where?: FollowsWhereInput;

    @Field(() => [FollowsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FollowsOrderByWithRelationInput>;

    @Field(() => FollowsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FollowsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FollowsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FollowsScalarFieldEnum>;
}
