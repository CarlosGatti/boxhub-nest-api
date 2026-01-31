import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedbackCreateWithoutUserInput } from './feedback-create-without-user.input';
import { Type } from 'class-transformer';
import { FeedbackCreateOrConnectWithoutUserInput } from './feedback-create-or-connect-without-user.input';
import { FeedbackUpsertWithWhereUniqueWithoutUserInput } from './feedback-upsert-with-where-unique-without-user.input';
import { FeedbackCreateManyUserInputEnvelope } from './feedback-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedbackWhereUniqueInput } from './feedback-where-unique.input';
import { FeedbackUpdateWithWhereUniqueWithoutUserInput } from './feedback-update-with-where-unique-without-user.input';
import { FeedbackUpdateManyWithWhereWithoutUserInput } from './feedback-update-many-with-where-without-user.input';
import { FeedbackScalarWhereInput } from './feedback-scalar-where.input';

@InputType()
export class FeedbackUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [FeedbackCreateWithoutUserInput], {nullable:true})
    @Type(() => FeedbackCreateWithoutUserInput)
    create?: Array<FeedbackCreateWithoutUserInput>;

    @Field(() => [FeedbackCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => FeedbackCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<FeedbackCreateOrConnectWithoutUserInput>;

    @Field(() => [FeedbackUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => FeedbackUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<FeedbackUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => FeedbackCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => FeedbackCreateManyUserInputEnvelope)
    createMany?: FeedbackCreateManyUserInputEnvelope;

    @Field(() => [FeedbackWhereUniqueInput], {nullable:true})
    @Type(() => FeedbackWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>>;

    @Field(() => [FeedbackWhereUniqueInput], {nullable:true})
    @Type(() => FeedbackWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>>;

    @Field(() => [FeedbackWhereUniqueInput], {nullable:true})
    @Type(() => FeedbackWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>>;

    @Field(() => [FeedbackWhereUniqueInput], {nullable:true})
    @Type(() => FeedbackWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>>;

    @Field(() => [FeedbackUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => FeedbackUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<FeedbackUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [FeedbackUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => FeedbackUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<FeedbackUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [FeedbackScalarWhereInput], {nullable:true})
    @Type(() => FeedbackScalarWhereInput)
    deleteMany?: Array<FeedbackScalarWhereInput>;
}
