import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutLogsInput } from './project-create-without-logs.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutLogsInput } from './project-create-or-connect-without-logs.input';
import { ProjectUpsertWithoutLogsInput } from './project-upsert-without-logs.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateToOneWithWhereWithoutLogsInput } from './project-update-to-one-with-where-without-logs.input';

@InputType()
export class ProjectUpdateOneRequiredWithoutLogsNestedInput {

    @Field(() => ProjectCreateWithoutLogsInput, {nullable:true})
    @Type(() => ProjectCreateWithoutLogsInput)
    create?: ProjectCreateWithoutLogsInput;

    @Field(() => ProjectCreateOrConnectWithoutLogsInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutLogsInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutLogsInput;

    @Field(() => ProjectUpsertWithoutLogsInput, {nullable:true})
    @Type(() => ProjectUpsertWithoutLogsInput)
    upsert?: ProjectUpsertWithoutLogsInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectUpdateToOneWithWhereWithoutLogsInput, {nullable:true})
    @Type(() => ProjectUpdateToOneWithWhereWithoutLogsInput)
    update?: ProjectUpdateToOneWithWhereWithoutLogsInput;
}
