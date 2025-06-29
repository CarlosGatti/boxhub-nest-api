import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutPermitsInput } from './project-create-without-permits.input';

@InputType()
export class ProjectCreateOrConnectWithoutPermitsInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectCreateWithoutPermitsInput, {nullable:false})
    @Type(() => ProjectCreateWithoutPermitsInput)
    create!: ProjectCreateWithoutPermitsInput;
}
