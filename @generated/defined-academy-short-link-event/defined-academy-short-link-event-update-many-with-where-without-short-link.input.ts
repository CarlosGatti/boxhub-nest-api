import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkEventScalarWhereInput } from './defined-academy-short-link-event-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkEventUpdateManyMutationInput } from './defined-academy-short-link-event-update-many-mutation.input';

@InputType()
export class DefinedAcademyShortLinkEventUpdateManyWithWhereWithoutShortLinkInput {

    @Field(() => DefinedAcademyShortLinkEventScalarWhereInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkEventScalarWhereInput)
    where!: DefinedAcademyShortLinkEventScalarWhereInput;

    @Field(() => DefinedAcademyShortLinkEventUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkEventUpdateManyMutationInput)
    data!: DefinedAcademyShortLinkEventUpdateManyMutationInput;
}
