import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedEventWhereUniqueInput } from './feed-event-where-unique.input';
import { Type } from 'class-transformer';
import { FeedEventCreateWithoutUserInput } from './feed-event-create-without-user.input';

@InputType()
export class FeedEventCreateOrConnectWithoutUserInput {

    @Field(() => FeedEventWhereUniqueInput, {nullable:false})
    @Type(() => FeedEventWhereUniqueInput)
    where!: Prisma.AtLeast<FeedEventWhereUniqueInput, 'id'>;

    @Field(() => FeedEventCreateWithoutUserInput, {nullable:false})
    @Type(() => FeedEventCreateWithoutUserInput)
    create!: FeedEventCreateWithoutUserInput;
}
