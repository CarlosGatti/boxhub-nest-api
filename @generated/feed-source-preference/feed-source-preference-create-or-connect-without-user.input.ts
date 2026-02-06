import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedSourcePreferenceWhereUniqueInput } from './feed-source-preference-where-unique.input';
import { Type } from 'class-transformer';
import { FeedSourcePreferenceCreateWithoutUserInput } from './feed-source-preference-create-without-user.input';

@InputType()
export class FeedSourcePreferenceCreateOrConnectWithoutUserInput {

    @Field(() => FeedSourcePreferenceWhereUniqueInput, {nullable:false})
    @Type(() => FeedSourcePreferenceWhereUniqueInput)
    where!: Prisma.AtLeast<FeedSourcePreferenceWhereUniqueInput, 'id' | 'userId_sourceId'>;

    @Field(() => FeedSourcePreferenceCreateWithoutUserInput, {nullable:false})
    @Type(() => FeedSourcePreferenceCreateWithoutUserInput)
    create!: FeedSourcePreferenceCreateWithoutUserInput;
}
