import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedSourcePreferenceWhereUniqueInput } from './feed-source-preference-where-unique.input';
import { Type } from 'class-transformer';
import { FeedSourcePreferenceCreateInput } from './feed-source-preference-create.input';
import { FeedSourcePreferenceUpdateInput } from './feed-source-preference-update.input';

@ArgsType()
export class UpsertOneFeedSourcePreferenceArgs {

    @Field(() => FeedSourcePreferenceWhereUniqueInput, {nullable:false})
    @Type(() => FeedSourcePreferenceWhereUniqueInput)
    where!: Prisma.AtLeast<FeedSourcePreferenceWhereUniqueInput, 'id' | 'userId_sourceId'>;

    @Field(() => FeedSourcePreferenceCreateInput, {nullable:false})
    @Type(() => FeedSourcePreferenceCreateInput)
    create!: FeedSourcePreferenceCreateInput;

    @Field(() => FeedSourcePreferenceUpdateInput, {nullable:false})
    @Type(() => FeedSourcePreferenceUpdateInput)
    update!: FeedSourcePreferenceUpdateInput;
}
