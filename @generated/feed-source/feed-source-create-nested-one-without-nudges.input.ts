import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceCreateWithoutNudgesInput } from './feed-source-create-without-nudges.input';
import { Type } from 'class-transformer';
import { FeedSourceCreateOrConnectWithoutNudgesInput } from './feed-source-create-or-connect-without-nudges.input';
import { Prisma } from '@prisma/client';
import { FeedSourceWhereUniqueInput } from './feed-source-where-unique.input';

@InputType()
export class FeedSourceCreateNestedOneWithoutNudgesInput {

    @Field(() => FeedSourceCreateWithoutNudgesInput, {nullable:true})
    @Type(() => FeedSourceCreateWithoutNudgesInput)
    create?: FeedSourceCreateWithoutNudgesInput;

    @Field(() => FeedSourceCreateOrConnectWithoutNudgesInput, {nullable:true})
    @Type(() => FeedSourceCreateOrConnectWithoutNudgesInput)
    connectOrCreate?: FeedSourceCreateOrConnectWithoutNudgesInput;

    @Field(() => FeedSourceWhereUniqueInput, {nullable:true})
    @Type(() => FeedSourceWhereUniqueInput)
    connect?: Prisma.AtLeast<FeedSourceWhereUniqueInput, 'id'>;
}
