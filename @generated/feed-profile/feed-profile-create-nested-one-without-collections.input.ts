import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedProfileCreateWithoutCollectionsInput } from './feed-profile-create-without-collections.input';
import { Type } from 'class-transformer';
import { FeedProfileCreateOrConnectWithoutCollectionsInput } from './feed-profile-create-or-connect-without-collections.input';
import { Prisma } from '@prisma/client';
import { FeedProfileWhereUniqueInput } from './feed-profile-where-unique.input';

@InputType()
export class FeedProfileCreateNestedOneWithoutCollectionsInput {

    @Field(() => FeedProfileCreateWithoutCollectionsInput, {nullable:true})
    @Type(() => FeedProfileCreateWithoutCollectionsInput)
    create?: FeedProfileCreateWithoutCollectionsInput;

    @Field(() => FeedProfileCreateOrConnectWithoutCollectionsInput, {nullable:true})
    @Type(() => FeedProfileCreateOrConnectWithoutCollectionsInput)
    connectOrCreate?: FeedProfileCreateOrConnectWithoutCollectionsInput;

    @Field(() => FeedProfileWhereUniqueInput, {nullable:true})
    @Type(() => FeedProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<FeedProfileWhereUniqueInput, 'id' | 'userId'>;
}
