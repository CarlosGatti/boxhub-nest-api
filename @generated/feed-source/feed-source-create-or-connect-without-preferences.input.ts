import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedSourceWhereUniqueInput } from './feed-source-where-unique.input';
import { Type } from 'class-transformer';
import { FeedSourceCreateWithoutPreferencesInput } from './feed-source-create-without-preferences.input';

@InputType()
export class FeedSourceCreateOrConnectWithoutPreferencesInput {

    @Field(() => FeedSourceWhereUniqueInput, {nullable:false})
    @Type(() => FeedSourceWhereUniqueInput)
    where!: Prisma.AtLeast<FeedSourceWhereUniqueInput, 'id'>;

    @Field(() => FeedSourceCreateWithoutPreferencesInput, {nullable:false})
    @Type(() => FeedSourceCreateWithoutPreferencesInput)
    create!: FeedSourceCreateWithoutPreferencesInput;
}
