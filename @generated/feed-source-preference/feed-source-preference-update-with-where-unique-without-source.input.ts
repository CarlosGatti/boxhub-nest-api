import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedSourcePreferenceWhereUniqueInput } from './feed-source-preference-where-unique.input';
import { Type } from 'class-transformer';
import { FeedSourcePreferenceUpdateWithoutSourceInput } from './feed-source-preference-update-without-source.input';

@InputType()
export class FeedSourcePreferenceUpdateWithWhereUniqueWithoutSourceInput {

    @Field(() => FeedSourcePreferenceWhereUniqueInput, {nullable:false})
    @Type(() => FeedSourcePreferenceWhereUniqueInput)
    where!: Prisma.AtLeast<FeedSourcePreferenceWhereUniqueInput, 'id' | 'userId_sourceId'>;

    @Field(() => FeedSourcePreferenceUpdateWithoutSourceInput, {nullable:false})
    @Type(() => FeedSourcePreferenceUpdateWithoutSourceInput)
    data!: FeedSourcePreferenceUpdateWithoutSourceInput;
}
