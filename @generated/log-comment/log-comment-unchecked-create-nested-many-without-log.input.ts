import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCommentCreateWithoutLogInput } from './log-comment-create-without-log.input';
import { Type } from 'class-transformer';
import { LogCommentCreateOrConnectWithoutLogInput } from './log-comment-create-or-connect-without-log.input';
import { LogCommentCreateManyLogInputEnvelope } from './log-comment-create-many-log-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';

@InputType()
export class LogCommentUncheckedCreateNestedManyWithoutLogInput {

    @Field(() => [LogCommentCreateWithoutLogInput], {nullable:true})
    @Type(() => LogCommentCreateWithoutLogInput)
    create?: Array<LogCommentCreateWithoutLogInput>;

    @Field(() => [LogCommentCreateOrConnectWithoutLogInput], {nullable:true})
    @Type(() => LogCommentCreateOrConnectWithoutLogInput)
    connectOrCreate?: Array<LogCommentCreateOrConnectWithoutLogInput>;

    @Field(() => LogCommentCreateManyLogInputEnvelope, {nullable:true})
    @Type(() => LogCommentCreateManyLogInputEnvelope)
    createMany?: LogCommentCreateManyLogInputEnvelope;

    @Field(() => [LogCommentWhereUniqueInput], {nullable:true})
    @Type(() => LogCommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>>;
}
