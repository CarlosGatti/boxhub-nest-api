import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyScalarWhereInput } from './defined-academy-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUpdateManyMutationInput } from './defined-academy-update-many-mutation.input';

@InputType()
export class DefinedAcademyUpdateManyWithWhereWithoutAppInput {

    @Field(() => DefinedAcademyScalarWhereInput, {nullable:false})
    @Type(() => DefinedAcademyScalarWhereInput)
    where!: DefinedAcademyScalarWhereInput;

    @Field(() => DefinedAcademyUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyUpdateManyMutationInput)
    data!: DefinedAcademyUpdateManyMutationInput;
}
