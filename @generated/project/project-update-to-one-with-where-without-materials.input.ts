import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutMaterialsInput } from './project-update-without-materials.input';

@InputType()
export class ProjectUpdateToOneWithWhereWithoutMaterialsInput {

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;

    @Field(() => ProjectUpdateWithoutMaterialsInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutMaterialsInput)
    data!: ProjectUpdateWithoutMaterialsInput;
}
