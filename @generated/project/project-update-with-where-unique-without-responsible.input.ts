import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutResponsibleInput } from './project-update-without-responsible.input';

@InputType()
export class ProjectUpdateWithWhereUniqueWithoutResponsibleInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectUpdateWithoutResponsibleInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutResponsibleInput)
    data!: ProjectUpdateWithoutResponsibleInput;
}
