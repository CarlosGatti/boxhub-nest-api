import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateWithoutPermitsInput } from './project-update-without-permits.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutPermitsInput } from './project-create-without-permits.input';
import { ProjectWhereInput } from './project-where.input';

@InputType()
export class ProjectUpsertWithoutPermitsInput {

    @Field(() => ProjectUpdateWithoutPermitsInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutPermitsInput)
    update!: ProjectUpdateWithoutPermitsInput;

    @Field(() => ProjectCreateWithoutPermitsInput, {nullable:false})
    @Type(() => ProjectCreateWithoutPermitsInput)
    create!: ProjectCreateWithoutPermitsInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;
}
