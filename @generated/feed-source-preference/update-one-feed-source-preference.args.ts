import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedSourcePreferenceUpdateInput } from './feed-source-preference-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FeedSourcePreferenceWhereUniqueInput } from './feed-source-preference-where-unique.input';

@ArgsType()
export class UpdateOneFeedSourcePreferenceArgs {

    @Field(() => FeedSourcePreferenceUpdateInput, {nullable:false})
    @Type(() => FeedSourcePreferenceUpdateInput)
    data!: FeedSourcePreferenceUpdateInput;

    @Field(() => FeedSourcePreferenceWhereUniqueInput, {nullable:false})
    @Type(() => FeedSourcePreferenceWhereUniqueInput)
    where!: Prisma.AtLeast<FeedSourcePreferenceWhereUniqueInput, 'id' | 'userId_sourceId'>;
}
