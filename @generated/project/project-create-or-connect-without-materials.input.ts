import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutMaterialsInput } from './project-create-without-materials.input';

@InputType()
export class ProjectCreateOrConnectWithoutMaterialsInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectCreateWithoutMaterialsInput, {nullable:false})
    @Type(() => ProjectCreateWithoutMaterialsInput)
    create!: ProjectCreateWithoutMaterialsInput;
}
