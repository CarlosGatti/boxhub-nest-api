import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedSourcePreferenceWhereUniqueInput } from './feed-source-preference-where-unique.input';
import { Type } from 'class-transformer';
import { FeedSourcePreferenceUpdateWithoutUserInput } from './feed-source-preference-update-without-user.input';

@InputType()
export class FeedSourcePreferenceUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => FeedSourcePreferenceWhereUniqueInput, {nullable:false})
    @Type(() => FeedSourcePreferenceWhereUniqueInput)
    where!: Prisma.AtLeast<FeedSourcePreferenceWhereUniqueInput, 'id' | 'userId_sourceId'>;

    @Field(() => FeedSourcePreferenceUpdateWithoutUserInput, {nullable:false})
    @Type(() => FeedSourcePreferenceUpdateWithoutUserInput)
    data!: FeedSourcePreferenceUpdateWithoutUserInput;
}
