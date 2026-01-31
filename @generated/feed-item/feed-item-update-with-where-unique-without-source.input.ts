import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedItemWhereUniqueInput } from './feed-item-where-unique.input';
import { Type } from 'class-transformer';
import { FeedItemUpdateWithoutSourceInput } from './feed-item-update-without-source.input';

@InputType()
export class FeedItemUpdateWithWhereUniqueWithoutSourceInput {

    @Field(() => FeedItemWhereUniqueInput, {nullable:false})
    @Type(() => FeedItemWhereUniqueInput)
    where!: Prisma.AtLeast<FeedItemWhereUniqueInput, 'id' | 'contentHash'>;

    @Field(() => FeedItemUpdateWithoutSourceInput, {nullable:false})
    @Type(() => FeedItemUpdateWithoutSourceInput)
    data!: FeedItemUpdateWithoutSourceInput;
}
