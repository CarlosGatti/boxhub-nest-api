import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutResponsibleInput } from './project-create-without-responsible.input';

@InputType()
export class ProjectCreateOrConnectWithoutResponsibleInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectCreateWithoutResponsibleInput, {nullable:false})
    @Type(() => ProjectCreateWithoutResponsibleInput)
    create!: ProjectCreateWithoutResponsibleInput;
}
