import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedbackCreateWithoutTargetAppInput } from './feedback-create-without-target-app.input';
import { Type } from 'class-transformer';
import { FeedbackCreateOrConnectWithoutTargetAppInput } from './feedback-create-or-connect-without-target-app.input';
import { FeedbackUpsertWithWhereUniqueWithoutTargetAppInput } from './feedback-upsert-with-where-unique-without-target-app.input';
import { FeedbackCreateManyTargetAppInputEnvelope } from './feedback-create-many-target-app-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedbackWhereUniqueInput } from './feedback-where-unique.input';
import { FeedbackUpdateWithWhereUniqueWithoutTargetAppInput } from './feedback-update-with-where-unique-without-target-app.input';
import { FeedbackUpdateManyWithWhereWithoutTargetAppInput } from './feedback-update-many-with-where-without-target-app.input';
import { FeedbackScalarWhereInput } from './feedback-scalar-where.input';

@InputType()
export class FeedbackUncheckedUpdateManyWithoutTargetAppNestedInput {

    @Field(() => [FeedbackCreateWithoutTargetAppInput], {nullable:true})
    @Type(() => FeedbackCreateWithoutTargetAppInput)
    create?: Array<FeedbackCreateWithoutTargetAppInput>;

    @Field(() => [FeedbackCreateOrConnectWithoutTargetAppInput], {nullable:true})
    @Type(() => FeedbackCreateOrConnectWithoutTargetAppInput)
    connectOrCreate?: Array<FeedbackCreateOrConnectWithoutTargetAppInput>;

    @Field(() => [FeedbackUpsertWithWhereUniqueWithoutTargetAppInput], {nullable:true})
    @Type(() => FeedbackUpsertWithWhereUniqueWithoutTargetAppInput)
    upsert?: Array<FeedbackUpsertWithWhereUniqueWithoutTargetAppInput>;

    @Field(() => FeedbackCreateManyTargetAppInputEnvelope, {nullable:true})
    @Type(() => FeedbackCreateManyTargetAppInputEnvelope)
    createMany?: FeedbackCreateManyTargetAppInputEnvelope;

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

    @Field(() => [FeedbackUpdateWithWhereUniqueWithoutTargetAppInput], {nullable:true})
    @Type(() => FeedbackUpdateWithWhereUniqueWithoutTargetAppInput)
    update?: Array<FeedbackUpdateWithWhereUniqueWithoutTargetAppInput>;

    @Field(() => [FeedbackUpdateManyWithWhereWithoutTargetAppInput], {nullable:true})
    @Type(() => FeedbackUpdateManyWithWhereWithoutTargetAppInput)
    updateMany?: Array<FeedbackUpdateManyWithWhereWithoutTargetAppInput>;

    @Field(() => [FeedbackScalarWhereInput], {nullable:true})
    @Type(() => FeedbackScalarWhereInput)
    deleteMany?: Array<FeedbackScalarWhereInput>;
}
