import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutResponsibleInput } from './project-create-without-responsible.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutResponsibleInput } from './project-create-or-connect-without-responsible.input';
import { ProjectCreateManyResponsibleInputEnvelope } from './project-create-many-responsible-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedManyWithoutResponsibleInput {

    @Field(() => [ProjectCreateWithoutResponsibleInput], {nullable:true})
    @Type(() => ProjectCreateWithoutResponsibleInput)
    create?: Array<ProjectCreateWithoutResponsibleInput>;

    @Field(() => [ProjectCreateOrConnectWithoutResponsibleInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutResponsibleInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutResponsibleInput>;

    @Field(() => ProjectCreateManyResponsibleInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyResponsibleInputEnvelope)
    createMany?: ProjectCreateManyResponsibleInputEnvelope;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;
}
