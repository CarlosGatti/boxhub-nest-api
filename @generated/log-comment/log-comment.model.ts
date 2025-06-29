import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ConstructionLog } from '../construction-log/construction-log.model';
import { User } from '../user/user.model';
import { LogCommentReply } from '../log-comment-reply/log-comment-reply.model';
import { LogCommentCount } from './log-comment-count.output';

@ObjectType()
export class LogComment {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    logId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => ConstructionLog, {nullable:false})
    log?: ConstructionLog;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [LogCommentReply], {nullable:true})
    replies?: Array<LogCommentReply>;

    @Field(() => LogCommentCount, {nullable:false})
    _count?: LogCommentCount;
}
