import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectWhereInput } from './defined-project-where.input';
import { Type } from 'class-transformer';
import { DefinedProjectUpdateWithoutProposalsInput } from './defined-project-update-without-proposals.input';

@InputType()
export class DefinedProjectUpdateToOneWithWhereWithoutProposalsInput {

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    where?: DefinedProjectWhereInput;

    @Field(() => DefinedProjectUpdateWithoutProposalsInput, {nullable:false})
    @Type(() => DefinedProjectUpdateWithoutProposalsInput)
    data!: DefinedProjectUpdateWithoutProposalsInput;
}
