import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourcePreferenceCreateWithoutUserInput } from './feed-source-preference-create-without-user.input';
import { Type } from 'class-transformer';
import { FeedSourcePreferenceCreateOrConnectWithoutUserInput } from './feed-source-preference-create-or-connect-without-user.input';
import { FeedSourcePreferenceCreateManyUserInputEnvelope } from './feed-source-preference-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedSourcePreferenceWhereUniqueInput } from './feed-source-preference-where-unique.input';

@InputType()
export class FeedSourcePreferenceUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [FeedSourcePreferenceCreateWithoutUserInput], {nullable:true})
    @Type(() => FeedSourcePreferenceCreateWithoutUserInput)
    create?: Array<FeedSourcePreferenceCreateWithoutUserInput>;

    @Field(() => [FeedSourcePreferenceCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => FeedSourcePreferenceCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<FeedSourcePreferenceCreateOrConnectWithoutUserInput>;

    @Field(() => FeedSourcePreferenceCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => FeedSourcePreferenceCreateManyUserInputEnvelope)
    createMany?: FeedSourcePreferenceCreateManyUserInputEnvelope;

    @Field(() => [FeedSourcePreferenceWhereUniqueInput], {nullable:true})
    @Type(() => FeedSourcePreferenceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeedSourcePreferenceWhereUniqueInput, 'id' | 'userId_sourceId'>>;
}
