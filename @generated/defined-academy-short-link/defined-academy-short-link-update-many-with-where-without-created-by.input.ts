import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkScalarWhereInput } from './defined-academy-short-link-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkUpdateManyMutationInput } from './defined-academy-short-link-update-many-mutation.input';

@InputType()
export class DefinedAcademyShortLinkUpdateManyWithWhereWithoutCreatedByInput {

    @Field(() => DefinedAcademyShortLinkScalarWhereInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkScalarWhereInput)
    where!: DefinedAcademyShortLinkScalarWhereInput;

    @Field(() => DefinedAcademyShortLinkUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkUpdateManyMutationInput)
    data!: DefinedAcademyShortLinkUpdateManyMutationInput;
}
