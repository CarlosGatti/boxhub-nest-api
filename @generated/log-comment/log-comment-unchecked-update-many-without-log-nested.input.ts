import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCommentCreateWithoutLogInput } from './log-comment-create-without-log.input';
import { Type } from 'class-transformer';
import { LogCommentCreateOrConnectWithoutLogInput } from './log-comment-create-or-connect-without-log.input';
import { LogCommentUpsertWithWhereUniqueWithoutLogInput } from './log-comment-upsert-with-where-unique-without-log.input';
import { LogCommentCreateManyLogInputEnvelope } from './log-comment-create-many-log-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';
import { LogCommentUpdateWithWhereUniqueWithoutLogInput } from './log-comment-update-with-where-unique-without-log.input';
import { LogCommentUpdateManyWithWhereWithoutLogInput } from './log-comment-update-many-with-where-without-log.input';
import { LogCommentScalarWhereInput } from './log-comment-scalar-where.input';

@InputType()
export class LogCommentUncheckedUpdateManyWithoutLogNestedInput {

    @Field(() => [LogCommentCreateWithoutLogInput], {nullable:true})
    @Type(() => LogCommentCreateWithoutLogInput)
    create?: Array<LogCommentCreateWithoutLogInput>;

    @Field(() => [LogCommentCreateOrConnectWithoutLogInput], {nullable:true})
    @Type(() => LogCommentCreateOrConnectWithoutLogInput)
    connectOrCreate?: Array<LogCommentCreateOrConnectWithoutLogInput>;

    @Field(() => [LogCommentUpsertWithWhereUniqueWithoutLogInput], {nullable:true})
    @Type(() => LogCommentUpsertWithWhereUniqueWithoutLogInput)
    upsert?: Array<LogCommentUpsertWithWhereUniqueWithoutLogInput>;

    @Field(() => LogCommentCreateManyLogInputEnvelope, {nullable:true})
    @Type(() => LogCommentCreateManyLogInputEnvelope)
    createMany?: LogCommentCreateManyLogInputEnvelope;

    @Field(() => [LogCommentWhereUniqueInput], {nullable:true})
    @Type(() => LogCommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>>;

    @Field(() => [LogCommentWhereUniqueInput], {nullable:true})
    @Type(() => LogCommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>>;

    @Field(() => [LogCommentWhereUniqueInput], {nullable:true})
    @Type(() => LogCommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>>;

    @Field(() => [LogCommentWhereUniqueInput], {nullable:true})
    @Type(() => LogCommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>>;

    @Field(() => [LogCommentUpdateWithWhereUniqueWithoutLogInput], {nullable:true})
    @Type(() => LogCommentUpdateWithWhereUniqueWithoutLogInput)
    update?: Array<LogCommentUpdateWithWhereUniqueWithoutLogInput>;

    @Field(() => [LogCommentUpdateManyWithWhereWithoutLogInput], {nullable:true})
    @Type(() => LogCommentUpdateManyWithWhereWithoutLogInput)
    updateMany?: Array<LogCommentUpdateManyWithWhereWithoutLogInput>;

    @Field(() => [LogCommentScalarWhereInput], {nullable:true})
    @Type(() => LogCommentScalarWhereInput)
    deleteMany?: Array<LogCommentScalarWhereInput>;
}
