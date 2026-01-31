import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedSourceWhereUniqueInput } from './feed-source-where-unique.input';
import { Type } from 'class-transformer';
import { FeedSourceCreateWithoutItemsInput } from './feed-source-create-without-items.input';

@InputType()
export class FeedSourceCreateOrConnectWithoutItemsInput {

    @Field(() => FeedSourceWhereUniqueInput, {nullable:false})
    @Type(() => FeedSourceWhereUniqueInput)
    where!: Prisma.AtLeast<FeedSourceWhereUniqueInput, 'id'>;

    @Field(() => FeedSourceCreateWithoutItemsInput, {nullable:false})
    @Type(() => FeedSourceCreateWithoutItemsInput)
    create!: FeedSourceCreateWithoutItemsInput;
}
