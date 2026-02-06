import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourcePreferenceCreateWithoutSourceInput } from './feed-source-preference-create-without-source.input';
import { Type } from 'class-transformer';
import { FeedSourcePreferenceCreateOrConnectWithoutSourceInput } from './feed-source-preference-create-or-connect-without-source.input';
import { FeedSourcePreferenceUpsertWithWhereUniqueWithoutSourceInput } from './feed-source-preference-upsert-with-where-unique-without-source.input';
import { FeedSourcePreferenceCreateManySourceInputEnvelope } from './feed-source-preference-create-many-source-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedSourcePreferenceWhereUniqueInput } from './feed-source-preference-where-unique.input';
import { FeedSourcePreferenceUpdateWithWhereUniqueWithoutSourceInput } from './feed-source-preference-update-with-where-unique-without-source.input';
import { FeedSourcePreferenceUpdateManyWithWhereWithoutSourceInput } from './feed-source-preference-update-many-with-where-without-source.input';
import { FeedSourcePreferenceScalarWhereInput } from './feed-source-preference-scalar-where.input';

@InputType()
export class FeedSourcePreferenceUncheckedUpdateManyWithoutSourceNestedInput {

    @Field(() => [FeedSourcePreferenceCreateWithoutSourceInput], {nullable:true})
    @Type(() => FeedSourcePreferenceCreateWithoutSourceInput)
    create?: Array<FeedSourcePreferenceCreateWithoutSourceInput>;

    @Field(() => [FeedSourcePreferenceCreateOrConnectWithoutSourceInput], {nullable:true})
    @Type(() => FeedSourcePreferenceCreateOrConnectWithoutSourceInput)
    connectOrCreate?: Array<FeedSourcePreferenceCreateOrConnectWithoutSourceInput>;

    @Field(() => [FeedSourcePreferenceUpsertWithWhereUniqueWithoutSourceInput], {nullable:true})
    @Type(() => FeedSourcePreferenceUpsertWithWhereUniqueWithoutSourceInput)
    upsert?: Array<FeedSourcePreferenceUpsertWithWhereUniqueWithoutSourceInput>;

    @Field(() => FeedSourcePreferenceCreateManySourceInputEnvelope, {nullable:true})
    @Type(() => FeedSourcePreferenceCreateManySourceInputEnvelope)
    createMany?: FeedSourcePreferenceCreateManySourceInputEnvelope;

    @Field(() => [FeedSourcePreferenceWhereUniqueInput], {nullable:true})
    @Type(() => FeedSourcePreferenceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FeedSourcePreferenceWhereUniqueInput, 'id' | 'userId_sourceId'>>;

    @Field(() => [FeedSourcePreferenceWhereUniqueInput], {nullable:true})
    @Type(() => FeedSourcePreferenceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FeedSourcePreferenceWhereUniqueInput, 'id' | 'userId_sourceId'>>;

    @Field(() => [FeedSourcePreferenceWhereUniqueInput], {nullable:true})
    @Type(() => FeedSourcePreferenceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FeedSourcePreferenceWhereUniqueInput, 'id' | 'userId_sourceId'>>;

    @Field(() => [FeedSourcePreferenceWhereUniqueInput], {nullable:true})
    @Type(() => FeedSourcePreferenceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeedSourcePreferenceWhereUniqueInput, 'id' | 'userId_sourceId'>>;

    @Field(() => [FeedSourcePreferenceUpdateWithWhereUniqueWithoutSourceInput], {nullable:true})
    @Type(() => FeedSourcePreferenceUpdateWithWhereUniqueWithoutSourceInput)
    update?: Array<FeedSourcePreferenceUpdateWithWhereUniqueWithoutSourceInput>;

    @Field(() => [FeedSourcePreferenceUpdateManyWithWhereWithoutSourceInput], {nullable:true})
    @Type(() => FeedSourcePreferenceUpdateManyWithWhereWithoutSourceInput)
    updateMany?: Array<FeedSourcePreferenceUpdateManyWithWhereWithoutSourceInput>;

    @Field(() => [FeedSourcePreferenceScalarWhereInput], {nullable:true})
    @Type(() => FeedSourcePreferenceScalarWhereInput)
    deleteMany?: Array<FeedSourcePreferenceScalarWhereInput>;
}
