import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectScalarWhereInput } from './defined-project-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedProjectUpdateManyMutationInput } from './defined-project-update-many-mutation.input';

@InputType()
export class DefinedProjectUpdateManyWithWhereWithoutClientInput {

    @Field(() => DefinedProjectScalarWhereInput, {nullable:false})
    @Type(() => DefinedProjectScalarWhereInput)
    where!: DefinedProjectScalarWhereInput;

    @Field(() => DefinedProjectUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedProjectUpdateManyMutationInput)
    data!: DefinedProjectUpdateManyMutationInput;
}
