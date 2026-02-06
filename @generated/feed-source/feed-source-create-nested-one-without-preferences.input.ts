import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceCreateWithoutPreferencesInput } from './feed-source-create-without-preferences.input';
import { Type } from 'class-transformer';
import { FeedSourceCreateOrConnectWithoutPreferencesInput } from './feed-source-create-or-connect-without-preferences.input';
import { Prisma } from '@prisma/client';
import { FeedSourceWhereUniqueInput } from './feed-source-where-unique.input';

@InputType()
export class FeedSourceCreateNestedOneWithoutPreferencesInput {

    @Field(() => FeedSourceCreateWithoutPreferencesInput, {nullable:true})
    @Type(() => FeedSourceCreateWithoutPreferencesInput)
    create?: FeedSourceCreateWithoutPreferencesInput;

    @Field(() => FeedSourceCreateOrConnectWithoutPreferencesInput, {nullable:true})
    @Type(() => FeedSourceCreateOrConnectWithoutPreferencesInput)
    connectOrCreate?: FeedSourceCreateOrConnectWithoutPreferencesInput;

    @Field(() => FeedSourceWhereUniqueInput, {nullable:true})
    @Type(() => FeedSourceWhereUniqueInput)
    connect?: Prisma.AtLeast<FeedSourceWhereUniqueInput, 'id'>;
}
