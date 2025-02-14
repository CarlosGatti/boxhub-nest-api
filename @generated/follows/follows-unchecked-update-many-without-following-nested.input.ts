import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FollowsCreateWithoutFollowingInput } from './follows-create-without-following.input';
import { Type } from 'class-transformer';
import { FollowsCreateOrConnectWithoutFollowingInput } from './follows-create-or-connect-without-following.input';
import { FollowsUpsertWithWhereUniqueWithoutFollowingInput } from './follows-upsert-with-where-unique-without-following.input';
import { FollowsCreateManyFollowingInputEnvelope } from './follows-create-many-following-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FollowsWhereUniqueInput } from './follows-where-unique.input';
import { FollowsUpdateWithWhereUniqueWithoutFollowingInput } from './follows-update-with-where-unique-without-following.input';
import { FollowsUpdateManyWithWhereWithoutFollowingInput } from './follows-update-many-with-where-without-following.input';
import { FollowsScalarWhereInput } from './follows-scalar-where.input';

@InputType()
export class FollowsUncheckedUpdateManyWithoutFollowingNestedInput {

    @Field(() => [FollowsCreateWithoutFollowingInput], {nullable:true})
    @Type(() => FollowsCreateWithoutFollowingInput)
    create?: Array<FollowsCreateWithoutFollowingInput>;

    @Field(() => [FollowsCreateOrConnectWithoutFollowingInput], {nullable:true})
    @Type(() => FollowsCreateOrConnectWithoutFollowingInput)
    connectOrCreate?: Array<FollowsCreateOrConnectWithoutFollowingInput>;

    @Field(() => [FollowsUpsertWithWhereUniqueWithoutFollowingInput], {nullable:true})
    @Type(() => FollowsUpsertWithWhereUniqueWithoutFollowingInput)
    upsert?: Array<FollowsUpsertWithWhereUniqueWithoutFollowingInput>;

    @Field(() => FollowsCreateManyFollowingInputEnvelope, {nullable:true})
    @Type(() => FollowsCreateManyFollowingInputEnvelope)
    createMany?: FollowsCreateManyFollowingInputEnvelope;

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

    @Field(() => [FollowsUpdateWithWhereUniqueWithoutFollowingInput], {nullable:true})
    @Type(() => FollowsUpdateWithWhereUniqueWithoutFollowingInput)
    update?: Array<FollowsUpdateWithWhereUniqueWithoutFollowingInput>;

    @Field(() => [FollowsUpdateManyWithWhereWithoutFollowingInput], {nullable:true})
    @Type(() => FollowsUpdateManyWithWhereWithoutFollowingInput)
    updateMany?: Array<FollowsUpdateManyWithWhereWithoutFollowingInput>;

    @Field(() => [FollowsScalarWhereInput], {nullable:true})
    @Type(() => FollowsScalarWhereInput)
    deleteMany?: Array<FollowsScalarWhereInput>;
}
