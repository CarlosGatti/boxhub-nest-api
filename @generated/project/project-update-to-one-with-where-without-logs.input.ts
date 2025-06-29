import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutLogsInput } from './project-update-without-logs.input';

@InputType()
export class ProjectUpdateToOneWithWhereWithoutLogsInput {

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;

    @Field(() => ProjectUpdateWithoutLogsInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutLogsInput)
    data!: ProjectUpdateWithoutLogsInput;
}
