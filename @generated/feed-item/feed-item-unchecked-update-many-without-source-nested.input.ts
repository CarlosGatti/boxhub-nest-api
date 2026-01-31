import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemCreateWithoutSourceInput } from './feed-item-create-without-source.input';
import { Type } from 'class-transformer';
import { FeedItemCreateOrConnectWithoutSourceInput } from './feed-item-create-or-connect-without-source.input';
import { FeedItemUpsertWithWhereUniqueWithoutSourceInput } from './feed-item-upsert-with-where-unique-without-source.input';
import { FeedItemCreateManySourceInputEnvelope } from './feed-item-create-many-source-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedItemWhereUniqueInput } from './feed-item-where-unique.input';
import { FeedItemUpdateWithWhereUniqueWithoutSourceInput } from './feed-item-update-with-where-unique-without-source.input';
import { FeedItemUpdateManyWithWhereWithoutSourceInput } from './feed-item-update-many-with-where-without-source.input';
import { FeedItemScalarWhereInput } from './feed-item-scalar-where.input';

@InputType()
export class FeedItemUncheckedUpdateManyWithoutSourceNestedInput {

    @Field(() => [FeedItemCreateWithoutSourceInput], {nullable:true})
    @Type(() => FeedItemCreateWithoutSourceInput)
    create?: Array<FeedItemCreateWithoutSourceInput>;

    @Field(() => [FeedItemCreateOrConnectWithoutSourceInput], {nullable:true})
    @Type(() => FeedItemCreateOrConnectWithoutSourceInput)
    connectOrCreate?: Array<FeedItemCreateOrConnectWithoutSourceInput>;

    @Field(() => [FeedItemUpsertWithWhereUniqueWithoutSourceInput], {nullable:true})
    @Type(() => FeedItemUpsertWithWhereUniqueWithoutSourceInput)
    upsert?: Array<FeedItemUpsertWithWhereUniqueWithoutSourceInput>;

    @Field(() => FeedItemCreateManySourceInputEnvelope, {nullable:true})
    @Type(() => FeedItemCreateManySourceInputEnvelope)
    createMany?: FeedItemCreateManySourceInputEnvelope;

    @Field(() => [FeedItemWhereUniqueInput], {nullable:true})
    @Type(() => FeedItemWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FeedItemWhereUniqueInput, 'id' | 'contentHash'>>;

    @Field(() => [FeedItemWhereUniqueInput], {nullable:true})
    @Type(() => FeedItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FeedItemWhereUniqueInput, 'id' | 'contentHash'>>;

    @Field(() => [FeedItemWhereUniqueInput], {nullable:true})
    @Type(() => FeedItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FeedItemWhereUniqueInput, 'id' | 'contentHash'>>;

    @Field(() => [FeedItemWhereUniqueInput], {nullable:true})
    @Type(() => FeedItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeedItemWhereUniqueInput, 'id' | 'contentHash'>>;

    @Field(() => [FeedItemUpdateWithWhereUniqueWithoutSourceInput], {nullable:true})
    @Type(() => FeedItemUpdateWithWhereUniqueWithoutSourceInput)
    update?: Array<FeedItemUpdateWithWhereUniqueWithoutSourceInput>;

    @Field(() => [FeedItemUpdateManyWithWhereWithoutSourceInput], {nullable:true})
    @Type(() => FeedItemUpdateManyWithWhereWithoutSourceInput)
    updateMany?: Array<FeedItemUpdateManyWithWhereWithoutSourceInput>;

    @Field(() => [FeedItemScalarWhereInput], {nullable:true})
    @Type(() => FeedItemScalarWhereInput)
    deleteMany?: Array<FeedItemScalarWhereInput>;
}
