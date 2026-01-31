import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedItemWhereUniqueInput } from './feed-item-where-unique.input';
import { Type } from 'class-transformer';
import { FeedItemCreateWithoutSourceInput } from './feed-item-create-without-source.input';

@InputType()
export class FeedItemCreateOrConnectWithoutSourceInput {

    @Field(() => FeedItemWhereUniqueInput, {nullable:false})
    @Type(() => FeedItemWhereUniqueInput)
    where!: Prisma.AtLeast<FeedItemWhereUniqueInput, 'id' | 'contentHash'>;

    @Field(() => FeedItemCreateWithoutSourceInput, {nullable:false})
    @Type(() => FeedItemCreateWithoutSourceInput)
    create!: FeedItemCreateWithoutSourceInput;
}
