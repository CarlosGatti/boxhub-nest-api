import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FollowsCreateWithoutFollowerInput } from './follows-create-without-follower.input';
import { Type } from 'class-transformer';
import { FollowsCreateOrConnectWithoutFollowerInput } from './follows-create-or-connect-without-follower.input';
import { FollowsCreateManyFollowerInputEnvelope } from './follows-create-many-follower-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FollowsWhereUniqueInput } from './follows-where-unique.input';

@InputType()
export class FollowsCreateNestedManyWithoutFollowerInput {

    @Field(() => [FollowsCreateWithoutFollowerInput], {nullable:true})
    @Type(() => FollowsCreateWithoutFollowerInput)
    create?: Array<FollowsCreateWithoutFollowerInput>;

    @Field(() => [FollowsCreateOrConnectWithoutFollowerInput], {nullable:true})
    @Type(() => FollowsCreateOrConnectWithoutFollowerInput)
    connectOrCreate?: Array<FollowsCreateOrConnectWithoutFollowerInput>;

    @Field(() => FollowsCreateManyFollowerInputEnvelope, {nullable:true})
    @Type(() => FollowsCreateManyFollowerInputEnvelope)
    createMany?: FollowsCreateManyFollowerInputEnvelope;

    @Field(() => [FollowsWhereUniqueInput], {nullable:true})
    @Type(() => FollowsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FollowsWhereUniqueInput, 'id'>>;
}
