import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAppAccessWhereInput } from './user-app-access-where.input';
import { Type } from 'class-transformer';
import { UserAppAccessOrderByWithRelationInput } from './user-app-access-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UserAppAccessWhereUniqueInput } from './user-app-access-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserAppAccessCountAggregateInput } from './user-app-access-count-aggregate.input';
import { UserAppAccessAvgAggregateInput } from './user-app-access-avg-aggregate.input';
import { UserAppAccessSumAggregateInput } from './user-app-access-sum-aggregate.input';
import { UserAppAccessMinAggregateInput } from './user-app-access-min-aggregate.input';
import { UserAppAccessMaxAggregateInput } from './user-app-access-max-aggregate.input';

@ArgsType()
export class UserAppAccessAggregateArgs {

    @Field(() => UserAppAccessWhereInput, {nullable:true})
    @Type(() => UserAppAccessWhereInput)
    where?: UserAppAccessWhereInput;

    @Field(() => [UserAppAccessOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserAppAccessOrderByWithRelationInput>;

    @Field(() => UserAppAccessWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserAppAccessWhereUniqueInput, 'id' | 'userId_appId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserAppAccessCountAggregateInput, {nullable:true})
    _count?: UserAppAccessCountAggregateInput;

    @Field(() => UserAppAccessAvgAggregateInput, {nullable:true})
    _avg?: UserAppAccessAvgAggregateInput;

    @Field(() => UserAppAccessSumAggregateInput, {nullable:true})
    _sum?: UserAppAccessSumAggregateInput;

    @Field(() => UserAppAccessMinAggregateInput, {nullable:true})
    _min?: UserAppAccessMinAggregateInput;

    @Field(() => UserAppAccessMaxAggregateInput, {nullable:true})
    _max?: UserAppAccessMaxAggregateInput;
}
