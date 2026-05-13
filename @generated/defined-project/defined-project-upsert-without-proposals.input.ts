import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectUpdateWithoutProposalsInput } from './defined-project-update-without-proposals.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateWithoutProposalsInput } from './defined-project-create-without-proposals.input';
import { DefinedProjectWhereInput } from './defined-project-where.input';

@InputType()
export class DefinedProjectUpsertWithoutProposalsInput {

    @Field(() => DefinedProjectUpdateWithoutProposalsInput, {nullable:false})
    @Type(() => DefinedProjectUpdateWithoutProposalsInput)
    update!: DefinedProjectUpdateWithoutProposalsInput;

    @Field(() => DefinedProjectCreateWithoutProposalsInput, {nullable:false})
    @Type(() => DefinedProjectCreateWithoutProposalsInput)
    create!: DefinedProjectCreateWithoutProposalsInput;

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    where?: DefinedProjectWhereInput;
}
