import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingProjectScalarWhereInput } from './defined-branding-project-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedBrandingProjectUpdateManyMutationInput } from './defined-branding-project-update-many-mutation.input';

@InputType()
export class DefinedBrandingProjectUpdateManyWithWhereWithoutProjectInput {

    @Field(() => DefinedBrandingProjectScalarWhereInput, {nullable:false})
    @Type(() => DefinedBrandingProjectScalarWhereInput)
    where!: DefinedBrandingProjectScalarWhereInput;

    @Field(() => DefinedBrandingProjectUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedBrandingProjectUpdateManyMutationInput)
    data!: DefinedBrandingProjectUpdateManyMutationInput;
}
