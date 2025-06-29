import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutLogsInput } from './project-create-without-logs.input';

@InputType()
export class ProjectCreateOrConnectWithoutLogsInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectCreateWithoutLogsInput, {nullable:false})
    @Type(() => ProjectCreateWithoutLogsInput)
    create!: ProjectCreateWithoutLogsInput;
}
