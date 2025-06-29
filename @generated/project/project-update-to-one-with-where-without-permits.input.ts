import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutPermitsInput } from './project-update-without-permits.input';

@InputType()
export class ProjectUpdateToOneWithWhereWithoutPermitsInput {

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;

    @Field(() => ProjectUpdateWithoutPermitsInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutPermitsInput)
    data!: ProjectUpdateWithoutPermitsInput;
}
