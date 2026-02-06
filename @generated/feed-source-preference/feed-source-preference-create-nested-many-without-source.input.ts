import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourcePreferenceCreateWithoutSourceInput } from './feed-source-preference-create-without-source.input';
import { Type } from 'class-transformer';
import { FeedSourcePreferenceCreateOrConnectWithoutSourceInput } from './feed-source-preference-create-or-connect-without-source.input';
import { FeedSourcePreferenceCreateManySourceInputEnvelope } from './feed-source-preference-create-many-source-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedSourcePreferenceWhereUniqueInput } from './feed-source-preference-where-unique.input';

@InputType()
export class FeedSourcePreferenceCreateNestedManyWithoutSourceInput {

    @Field(() => [FeedSourcePreferenceCreateWithoutSourceInput], {nullable:true})
    @Type(() => FeedSourcePreferenceCreateWithoutSourceInput)
    create?: Array<FeedSourcePreferenceCreateWithoutSourceInput>;

    @Field(() => [FeedSourcePreferenceCreateOrConnectWithoutSourceInput], {nullable:true})
    @Type(() => FeedSourcePreferenceCreateOrConnectWithoutSourceInput)
    connectOrCreate?: Array<FeedSourcePreferenceCreateOrConnectWithoutSourceInput>;

    @Field(() => FeedSourcePreferenceCreateManySourceInputEnvelope, {nullable:true})
    @Type(() => FeedSourcePreferenceCreateManySourceInputEnvelope)
    createMany?: FeedSourcePreferenceCreateManySourceInputEnvelope;

    @Field(() => [FeedSourcePreferenceWhereUniqueInput], {nullable:true})
    @Type(() => FeedSourcePreferenceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeedSourcePreferenceWhereUniqueInput, 'id' | 'userId_sourceId'>>;
}
