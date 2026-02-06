import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedSourcePreferenceWhereUniqueInput } from './feed-source-preference-where-unique.input';
import { Type } from 'class-transformer';
import { FeedSourcePreferenceCreateWithoutSourceInput } from './feed-source-preference-create-without-source.input';

@InputType()
export class FeedSourcePreferenceCreateOrConnectWithoutSourceInput {

    @Field(() => FeedSourcePreferenceWhereUniqueInput, {nullable:false})
    @Type(() => FeedSourcePreferenceWhereUniqueInput)
    where!: Prisma.AtLeast<FeedSourcePreferenceWhereUniqueInput, 'id' | 'userId_sourceId'>;

    @Field(() => FeedSourcePreferenceCreateWithoutSourceInput, {nullable:false})
    @Type(() => FeedSourcePreferenceCreateWithoutSourceInput)
    create!: FeedSourcePreferenceCreateWithoutSourceInput;
}
