import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateWithoutLogsInput } from './project-update-without-logs.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutLogsInput } from './project-create-without-logs.input';
import { ProjectWhereInput } from './project-where.input';

@InputType()
export class ProjectUpsertWithoutLogsInput {

    @Field(() => ProjectUpdateWithoutLogsInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutLogsInput)
    update!: ProjectUpdateWithoutLogsInput;

    @Field(() => ProjectCreateWithoutLogsInput, {nullable:false})
    @Type(() => ProjectCreateWithoutLogsInput)
    create!: ProjectCreateWithoutLogsInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;
}
