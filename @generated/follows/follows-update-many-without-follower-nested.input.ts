import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FollowsCreateWithoutFollowerInput } from './follows-create-without-follower.input';
import { Type } from 'class-transformer';
import { FollowsCreateOrConnectWithoutFollowerInput } from './follows-create-or-connect-without-follower.input';
import { FollowsUpsertWithWhereUniqueWithoutFollowerInput } from './follows-upsert-with-where-unique-without-follower.input';
import { FollowsCreateManyFollowerInputEnvelope } from './follows-create-many-follower-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FollowsWhereUniqueInput } from './follows-where-unique.input';
import { FollowsUpdateWithWhereUniqueWithoutFollowerInput } from './follows-update-with-where-unique-without-follower.input';
import { FollowsUpdateManyWithWhereWithoutFollowerInput } from './follows-update-many-with-where-without-follower.input';
import { FollowsScalarWhereInput } from './follows-scalar-where.input';

@InputType()
export class FollowsUpdateManyWithoutFollowerNestedInput {

    @Field(() => [FollowsCreateWithoutFollowerInput], {nullable:true})
    @Type(() => FollowsCreateWithoutFollowerInput)
    create?: Array<FollowsCreateWithoutFollowerInput>;

    @Field(() => [FollowsCreateOrConnectWithoutFollowerInput], {nullable:true})
    @Type(() => FollowsCreateOrConnectWithoutFollowerInput)
    connectOrCreate?: Array<FollowsCreateOrConnectWithoutFollowerInput>;

    @Field(() => [FollowsUpsertWithWhereUniqueWithoutFollowerInput], {nullable:true})
    @Type(() => FollowsUpsertWithWhereUniqueWithoutFollowerInput)
    upsert?: Array<FollowsUpsertWithWhereUniqueWithoutFollowerInput>;

    @Field(() => FollowsCreateManyFollowerInputEnvelope, {nullable:true})
    @Type(() => FollowsCreateManyFollowerInputEnvelope)
    createMany?: FollowsCreateManyFollowerInputEnvelope;

    @Field(() => [FollowsWhereUniqueInput], {nullable:true})
    @Type(() => FollowsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FollowsWhereUniqueInput, 'id'>>;

    @Field(() => [FollowsWhereUniqueInput], {nullable:true})
    @Type(() => FollowsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FollowsWhereUniqueInput, 'id'>>;

    @Field(() => [FollowsWhereUniqueInput], {nullable:true})
    @Type(() => FollowsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FollowsWhereUniqueInput, 'id'>>;

    @Field(() => [FollowsWhereUniqueInput], {nullable:true})
    @Type(() => FollowsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FollowsWhereUniqueInput, 'id'>>;

    @Field(() => [FollowsUpdateWithWhereUniqueWithoutFollowerInput], {nullable:true})
    @Type(() => FollowsUpdateWithWhereUniqueWithoutFollowerInput)
    update?: Array<FollowsUpdateWithWhereUniqueWithoutFollowerInput>;

    @Field(() => [FollowsUpdateManyWithWhereWithoutFollowerInput], {nullable:true})
    @Type(() => FollowsUpdateManyWithWhereWithoutFollowerInput)
    updateMany?: Array<FollowsUpdateManyWithWhereWithoutFollowerInput>;

    @Field(() => [FollowsScalarWhereInput], {nullable:true})
    @Type(() => FollowsScalarWhereInput)
    deleteMany?: Array<FollowsScalarWhereInput>;
}
