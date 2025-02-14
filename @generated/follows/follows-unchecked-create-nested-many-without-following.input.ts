import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FollowsCreateWithoutFollowingInput } from './follows-create-without-following.input';
import { Type } from 'class-transformer';
import { FollowsCreateOrConnectWithoutFollowingInput } from './follows-create-or-connect-without-following.input';
import { FollowsCreateManyFollowingInputEnvelope } from './follows-create-many-following-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FollowsWhereUniqueInput } from './follows-where-unique.input';

@InputType()
export class FollowsUncheckedCreateNestedManyWithoutFollowingInput {

    @Field(() => [FollowsCreateWithoutFollowingInput], {nullable:true})
    @Type(() => FollowsCreateWithoutFollowingInput)
    create?: Array<FollowsCreateWithoutFollowingInput>;

    @Field(() => [FollowsCreateOrConnectWithoutFollowingInput], {nullable:true})
    @Type(() => FollowsCreateOrConnectWithoutFollowingInput)
    connectOrCreate?: Array<FollowsCreateOrConnectWithoutFollowingInput>;

    @Field(() => FollowsCreateManyFollowingInputEnvelope, {nullable:true})
    @Type(() => FollowsCreateManyFollowingInputEnvelope)
    createMany?: FollowsCreateManyFollowingInputEnvelope;

    @Field(() => [FollowsWhereUniqueInput], {nullable:true})
    @Type(() => FollowsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FollowsWhereUniqueInput, 'id'>>;
}
