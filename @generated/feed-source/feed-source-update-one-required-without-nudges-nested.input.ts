import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceCreateWithoutNudgesInput } from './feed-source-create-without-nudges.input';
import { Type } from 'class-transformer';
import { FeedSourceCreateOrConnectWithoutNudgesInput } from './feed-source-create-or-connect-without-nudges.input';
import { FeedSourceUpsertWithoutNudgesInput } from './feed-source-upsert-without-nudges.input';
import { Prisma } from '@prisma/client';
import { FeedSourceWhereUniqueInput } from './feed-source-where-unique.input';
import { FeedSourceUpdateToOneWithWhereWithoutNudgesInput } from './feed-source-update-to-one-with-where-without-nudges.input';

@InputType()
export class FeedSourceUpdateOneRequiredWithoutNudgesNestedInput {

    @Field(() => FeedSourceCreateWithoutNudgesInput, {nullable:true})
    @Type(() => FeedSourceCreateWithoutNudgesInput)
    create?: FeedSourceCreateWithoutNudgesInput;

    @Field(() => FeedSourceCreateOrConnectWithoutNudgesInput, {nullable:true})
    @Type(() => FeedSourceCreateOrConnectWithoutNudgesInput)
    connectOrCreate?: FeedSourceCreateOrConnectWithoutNudgesInput;

    @Field(() => FeedSourceUpsertWithoutNudgesInput, {nullable:true})
    @Type(() => FeedSourceUpsertWithoutNudgesInput)
    upsert?: FeedSourceUpsertWithoutNudgesInput;

    @Field(() => FeedSourceWhereUniqueInput, {nullable:true})
    @Type(() => FeedSourceWhereUniqueInput)
    connect?: Prisma.AtLeast<FeedSourceWhereUniqueInput, 'id'>;

    @Field(() => FeedSourceUpdateToOneWithWhereWithoutNudgesInput, {nullable:true})
    @Type(() => FeedSourceUpdateToOneWithWhereWithoutNudgesInput)
    update?: FeedSourceUpdateToOneWithWhereWithoutNudgesInput;
}
