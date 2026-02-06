import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourcePreferenceCreateWithoutUserInput } from './feed-source-preference-create-without-user.input';
import { Type } from 'class-transformer';
import { FeedSourcePreferenceCreateOrConnectWithoutUserInput } from './feed-source-preference-create-or-connect-without-user.input';
import { FeedSourcePreferenceUpsertWithWhereUniqueWithoutUserInput } from './feed-source-preference-upsert-with-where-unique-without-user.input';
import { FeedSourcePreferenceCreateManyUserInputEnvelope } from './feed-source-preference-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedSourcePreferenceWhereUniqueInput } from './feed-source-preference-where-unique.input';
import { FeedSourcePreferenceUpdateWithWhereUniqueWithoutUserInput } from './feed-source-preference-update-with-where-unique-without-user.input';
import { FeedSourcePreferenceUpdateManyWithWhereWithoutUserInput } from './feed-source-preference-update-many-with-where-without-user.input';
import { FeedSourcePreferenceScalarWhereInput } from './feed-source-preference-scalar-where.input';

@InputType()
export class FeedSourcePreferenceUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [FeedSourcePreferenceCreateWithoutUserInput], {nullable:true})
    @Type(() => FeedSourcePreferenceCreateWithoutUserInput)
    create?: Array<FeedSourcePreferenceCreateWithoutUserInput>;

    @Field(() => [FeedSourcePreferenceCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => FeedSourcePreferenceCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<FeedSourcePreferenceCreateOrConnectWithoutUserInput>;

    @Field(() => [FeedSourcePreferenceUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => FeedSourcePreferenceUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<FeedSourcePreferenceUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => FeedSourcePreferenceCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => FeedSourcePreferenceCreateManyUserInputEnvelope)
    createMany?: FeedSourcePreferenceCreateManyUserInputEnvelope;

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

    @Field(() => [FeedSourcePreferenceUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => FeedSourcePreferenceUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<FeedSourcePreferenceUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [FeedSourcePreferenceUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => FeedSourcePreferenceUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<FeedSourcePreferenceUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [FeedSourcePreferenceScalarWhereInput], {nullable:true})
    @Type(() => FeedSourcePreferenceScalarWhereInput)
    deleteMany?: Array<FeedSourcePreferenceScalarWhereInput>;
}
