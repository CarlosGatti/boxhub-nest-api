import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceScalarWhereInput } from './defined-academy-resource-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceUpdateManyMutationInput } from './defined-academy-resource-update-many-mutation.input';

@InputType()
export class DefinedAcademyResourceUpdateManyWithWhereWithoutCreatedByInput {

    @Field(() => DefinedAcademyResourceScalarWhereInput, {nullable:false})
    @Type(() => DefinedAcademyResourceScalarWhereInput)
    where!: DefinedAcademyResourceScalarWhereInput;

    @Field(() => DefinedAcademyResourceUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyResourceUpdateManyMutationInput)
    data!: DefinedAcademyResourceUpdateManyMutationInput;
}
