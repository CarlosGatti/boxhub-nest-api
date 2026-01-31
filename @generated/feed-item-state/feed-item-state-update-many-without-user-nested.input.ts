import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemStateCreateWithoutUserInput } from './feed-item-state-create-without-user.input';
import { Type } from 'class-transformer';
import { FeedItemStateCreateOrConnectWithoutUserInput } from './feed-item-state-create-or-connect-without-user.input';
import { FeedItemStateUpsertWithWhereUniqueWithoutUserInput } from './feed-item-state-upsert-with-where-unique-without-user.input';
import { FeedItemStateCreateManyUserInputEnvelope } from './feed-item-state-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedItemStateWhereUniqueInput } from './feed-item-state-where-unique.input';
import { FeedItemStateUpdateWithWhereUniqueWithoutUserInput } from './feed-item-state-update-with-where-unique-without-user.input';
import { FeedItemStateUpdateManyWithWhereWithoutUserInput } from './feed-item-state-update-many-with-where-without-user.input';
import { FeedItemStateScalarWhereInput } from './feed-item-state-scalar-where.input';

@InputType()
export class FeedItemStateUpdateManyWithoutUserNestedInput {

    @Field(() => [FeedItemStateCreateWithoutUserInput], {nullable:true})
    @Type(() => FeedItemStateCreateWithoutUserInput)
    create?: Array<FeedItemStateCreateWithoutUserInput>;

    @Field(() => [FeedItemStateCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => FeedItemStateCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<FeedItemStateCreateOrConnectWithoutUserInput>;

    @Field(() => [FeedItemStateUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => FeedItemStateUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<FeedItemStateUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => FeedItemStateCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => FeedItemStateCreateManyUserInputEnvelope)
    createMany?: FeedItemStateCreateManyUserInputEnvelope;

    @Field(() => [FeedItemStateWhereUniqueInput], {nullable:true})
    @Type(() => FeedItemStateWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FeedItemStateWhereUniqueInput, 'id' | 'userId_itemId'>>;

    @Field(() => [FeedItemStateWhereUniqueInput], {nullable:true})
    @Type(() => FeedItemStateWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FeedItemStateWhereUniqueInput, 'id' | 'userId_itemId'>>;

    @Field(() => [FeedItemStateWhereUniqueInput], {nullable:true})
    @Type(() => FeedItemStateWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FeedItemStateWhereUniqueInput, 'id' | 'userId_itemId'>>;

    @Field(() => [FeedItemStateWhereUniqueInput], {nullable:true})
    @Type(() => FeedItemStateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeedItemStateWhereUniqueInput, 'id' | 'userId_itemId'>>;

    @Field(() => [FeedItemStateUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => FeedItemStateUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<FeedItemStateUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [FeedItemStateUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => FeedItemStateUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<FeedItemStateUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [FeedItemStateScalarWhereInput], {nullable:true})
    @Type(() => FeedItemStateScalarWhereInput)
    deleteMany?: Array<FeedItemStateScalarWhereInput>;
}
