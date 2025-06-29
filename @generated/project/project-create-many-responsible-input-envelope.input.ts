import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateManyResponsibleInput } from './project-create-many-responsible.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectCreateManyResponsibleInputEnvelope {

    @Field(() => [ProjectCreateManyResponsibleInput], {nullable:false})
    @Type(() => ProjectCreateManyResponsibleInput)
    data!: Array<ProjectCreateManyResponsibleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
