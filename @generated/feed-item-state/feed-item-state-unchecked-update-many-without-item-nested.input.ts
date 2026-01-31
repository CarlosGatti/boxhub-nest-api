import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemStateCreateWithoutItemInput } from './feed-item-state-create-without-item.input';
import { Type } from 'class-transformer';
import { FeedItemStateCreateOrConnectWithoutItemInput } from './feed-item-state-create-or-connect-without-item.input';
import { FeedItemStateUpsertWithWhereUniqueWithoutItemInput } from './feed-item-state-upsert-with-where-unique-without-item.input';
import { FeedItemStateCreateManyItemInputEnvelope } from './feed-item-state-create-many-item-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedItemStateWhereUniqueInput } from './feed-item-state-where-unique.input';
import { FeedItemStateUpdateWithWhereUniqueWithoutItemInput } from './feed-item-state-update-with-where-unique-without-item.input';
import { FeedItemStateUpdateManyWithWhereWithoutItemInput } from './feed-item-state-update-many-with-where-without-item.input';
import { FeedItemStateScalarWhereInput } from './feed-item-state-scalar-where.input';

@InputType()
export class FeedItemStateUncheckedUpdateManyWithoutItemNestedInput {

    @Field(() => [FeedItemStateCreateWithoutItemInput], {nullable:true})
    @Type(() => FeedItemStateCreateWithoutItemInput)
    create?: Array<FeedItemStateCreateWithoutItemInput>;

    @Field(() => [FeedItemStateCreateOrConnectWithoutItemInput], {nullable:true})
    @Type(() => FeedItemStateCreateOrConnectWithoutItemInput)
    connectOrCreate?: Array<FeedItemStateCreateOrConnectWithoutItemInput>;

    @Field(() => [FeedItemStateUpsertWithWhereUniqueWithoutItemInput], {nullable:true})
    @Type(() => FeedItemStateUpsertWithWhereUniqueWithoutItemInput)
    upsert?: Array<FeedItemStateUpsertWithWhereUniqueWithoutItemInput>;

    @Field(() => FeedItemStateCreateManyItemInputEnvelope, {nullable:true})
    @Type(() => FeedItemStateCreateManyItemInputEnvelope)
    createMany?: FeedItemStateCreateManyItemInputEnvelope;

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

    @Field(() => [FeedItemStateUpdateWithWhereUniqueWithoutItemInput], {nullable:true})
    @Type(() => FeedItemStateUpdateWithWhereUniqueWithoutItemInput)
    update?: Array<FeedItemStateUpdateWithWhereUniqueWithoutItemInput>;

    @Field(() => [FeedItemStateUpdateManyWithWhereWithoutItemInput], {nullable:true})
    @Type(() => FeedItemStateUpdateManyWithWhereWithoutItemInput)
    updateMany?: Array<FeedItemStateUpdateManyWithWhereWithoutItemInput>;

    @Field(() => [FeedItemStateScalarWhereInput], {nullable:true})
    @Type(() => FeedItemStateScalarWhereInput)
    deleteMany?: Array<FeedItemStateScalarWhereInput>;
}
