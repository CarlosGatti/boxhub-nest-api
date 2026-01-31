import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedbackCreateWithoutUserInput } from './feedback-create-without-user.input';
import { Type } from 'class-transformer';
import { FeedbackCreateOrConnectWithoutUserInput } from './feedback-create-or-connect-without-user.input';
import { FeedbackCreateManyUserInputEnvelope } from './feedback-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedbackWhereUniqueInput } from './feedback-where-unique.input';

@InputType()
export class FeedbackUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [FeedbackCreateWithoutUserInput], {nullable:true})
    @Type(() => FeedbackCreateWithoutUserInput)
    create?: Array<FeedbackCreateWithoutUserInput>;

    @Field(() => [FeedbackCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => FeedbackCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<FeedbackCreateOrConnectWithoutUserInput>;

    @Field(() => FeedbackCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => FeedbackCreateManyUserInputEnvelope)
    createMany?: FeedbackCreateManyUserInputEnvelope;

    @Field(() => [FeedbackWhereUniqueInput], {nullable:true})
    @Type(() => FeedbackWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>>;
}
