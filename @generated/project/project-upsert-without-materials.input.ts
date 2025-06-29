import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateWithoutMaterialsInput } from './project-update-without-materials.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutMaterialsInput } from './project-create-without-materials.input';
import { ProjectWhereInput } from './project-where.input';

@InputType()
export class ProjectUpsertWithoutMaterialsInput {

    @Field(() => ProjectUpdateWithoutMaterialsInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutMaterialsInput)
    update!: ProjectUpdateWithoutMaterialsInput;

    @Field(() => ProjectCreateWithoutMaterialsInput, {nullable:false})
    @Type(() => ProjectCreateWithoutMaterialsInput)
    create!: ProjectCreateWithoutMaterialsInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;
}
