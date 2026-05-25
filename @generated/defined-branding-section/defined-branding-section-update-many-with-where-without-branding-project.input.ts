import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingSectionScalarWhereInput } from './defined-branding-section-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedBrandingSectionUpdateManyMutationInput } from './defined-branding-section-update-many-mutation.input';

@InputType()
export class DefinedBrandingSectionUpdateManyWithWhereWithoutBrandingProjectInput {

    @Field(() => DefinedBrandingSectionScalarWhereInput, {nullable:false})
    @Type(() => DefinedBrandingSectionScalarWhereInput)
    where!: DefinedBrandingSectionScalarWhereInput;

    @Field(() => DefinedBrandingSectionUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedBrandingSectionUpdateManyMutationInput)
    data!: DefinedBrandingSectionUpdateManyMutationInput;
}
