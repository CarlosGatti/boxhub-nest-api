import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LogType } from '../prisma/log-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { Project } from '../project/project.model';
import { User } from '../user/user.model';
import { LogComment } from '../log-comment/log-comment.model';
import { ConstructionLogCount } from './construction-log-count.output';

@ObjectType()
export class ConstructionLog {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => LogType, {nullable:false})
    type!: keyof typeof LogType;

    @Field(() => GraphQLJSON, {nullable:true})
    images!: any | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Project, {nullable:false})
    project?: Project;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [LogComment], {nullable:true})
    comments?: Array<LogComment>;

    @Field(() => ConstructionLogCount, {nullable:false})
    _count?: ConstructionLogCount;
}
