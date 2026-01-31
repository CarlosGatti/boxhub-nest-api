import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedProfileWhereUniqueInput } from './feed-profile-where-unique.input';
import { Type } from 'class-transformer';
import { FeedProfileCreateWithoutCollectionsInput } from './feed-profile-create-without-collections.input';

@InputType()
export class FeedProfileCreateOrConnectWithoutCollectionsInput {

    @Field(() => FeedProfileWhereUniqueInput, {nullable:false})
    @Type(() => FeedProfileWhereUniqueInput)
    where!: Prisma.AtLeast<FeedProfileWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => FeedProfileCreateWithoutCollectionsInput, {nullable:false})
    @Type(() => FeedProfileCreateWithoutCollectionsInput)
    create!: FeedProfileCreateWithoutCollectionsInput;
}
