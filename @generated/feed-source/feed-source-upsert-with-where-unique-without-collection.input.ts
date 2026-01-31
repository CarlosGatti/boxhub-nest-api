import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedSourceWhereUniqueInput } from './feed-source-where-unique.input';
import { Type } from 'class-transformer';
import { FeedSourceUpdateWithoutCollectionInput } from './feed-source-update-without-collection.input';
import { FeedSourceCreateWithoutCollectionInput } from './feed-source-create-without-collection.input';

@InputType()
export class FeedSourceUpsertWithWhereUniqueWithoutCollectionInput {

    @Field(() => FeedSourceWhereUniqueInput, {nullable:false})
    @Type(() => FeedSourceWhereUniqueInput)
    where!: Prisma.AtLeast<FeedSourceWhereUniqueInput, 'id'>;

    @Field(() => FeedSourceUpdateWithoutCollectionInput, {nullable:false})
    @Type(() => FeedSourceUpdateWithoutCollectionInput)
    update!: FeedSourceUpdateWithoutCollectionInput;

    @Field(() => FeedSourceCreateWithoutCollectionInput, {nullable:false})
    @Type(() => FeedSourceCreateWithoutCollectionInput)
    create!: FeedSourceCreateWithoutCollectionInput;
}
