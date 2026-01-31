import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedbackCreateWithoutTargetAppInput } from './feedback-create-without-target-app.input';
import { Type } from 'class-transformer';
import { FeedbackCreateOrConnectWithoutTargetAppInput } from './feedback-create-or-connect-without-target-app.input';
import { FeedbackCreateManyTargetAppInputEnvelope } from './feedback-create-many-target-app-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedbackWhereUniqueInput } from './feedback-where-unique.input';

@InputType()
export class FeedbackUncheckedCreateNestedManyWithoutTargetAppInput {

    @Field(() => [FeedbackCreateWithoutTargetAppInput], {nullable:true})
    @Type(() => FeedbackCreateWithoutTargetAppInput)
    create?: Array<FeedbackCreateWithoutTargetAppInput>;

    @Field(() => [FeedbackCreateOrConnectWithoutTargetAppInput], {nullable:true})
    @Type(() => FeedbackCreateOrConnectWithoutTargetAppInput)
    connectOrCreate?: Array<FeedbackCreateOrConnectWithoutTargetAppInput>;

    @Field(() => FeedbackCreateManyTargetAppInputEnvelope, {nullable:true})
    @Type(() => FeedbackCreateManyTargetAppInputEnvelope)
    createMany?: FeedbackCreateManyTargetAppInputEnvelope;

    @Field(() => [FeedbackWhereUniqueInput], {nullable:true})
    @Type(() => FeedbackWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>>;
}
