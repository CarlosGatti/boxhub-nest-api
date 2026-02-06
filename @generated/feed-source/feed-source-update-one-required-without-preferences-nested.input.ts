import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceCreateWithoutPreferencesInput } from './feed-source-create-without-preferences.input';
import { Type } from 'class-transformer';
import { FeedSourceCreateOrConnectWithoutPreferencesInput } from './feed-source-create-or-connect-without-preferences.input';
import { FeedSourceUpsertWithoutPreferencesInput } from './feed-source-upsert-without-preferences.input';
import { Prisma } from '@prisma/client';
import { FeedSourceWhereUniqueInput } from './feed-source-where-unique.input';
import { FeedSourceUpdateToOneWithWhereWithoutPreferencesInput } from './feed-source-update-to-one-with-where-without-preferences.input';

@InputType()
export class FeedSourceUpdateOneRequiredWithoutPreferencesNestedInput {

    @Field(() => FeedSourceCreateWithoutPreferencesInput, {nullable:true})
    @Type(() => FeedSourceCreateWithoutPreferencesInput)
    create?: FeedSourceCreateWithoutPreferencesInput;

    @Field(() => FeedSourceCreateOrConnectWithoutPreferencesInput, {nullable:true})
    @Type(() => FeedSourceCreateOrConnectWithoutPreferencesInput)
    connectOrCreate?: FeedSourceCreateOrConnectWithoutPreferencesInput;

    @Field(() => FeedSourceUpsertWithoutPreferencesInput, {nullable:true})
    @Type(() => FeedSourceUpsertWithoutPreferencesInput)
    upsert?: FeedSourceUpsertWithoutPreferencesInput;

    @Field(() => FeedSourceWhereUniqueInput, {nullable:true})
    @Type(() => FeedSourceWhereUniqueInput)
    connect?: Prisma.AtLeast<FeedSourceWhereUniqueInput, 'id'>;

    @Field(() => FeedSourceUpdateToOneWithWhereWithoutPreferencesInput, {nullable:true})
    @Type(() => FeedSourceUpdateToOneWithWhereWithoutPreferencesInput)
    update?: FeedSourceUpdateToOneWithWhereWithoutPreferencesInput;
}
