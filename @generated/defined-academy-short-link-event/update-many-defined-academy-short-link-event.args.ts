import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkEventUpdateManyMutationInput } from './defined-academy-short-link-event-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkEventWhereInput } from './defined-academy-short-link-event-where.input';

@ArgsType()
export class UpdateManyDefinedAcademyShortLinkEventArgs {

    @Field(() => DefinedAcademyShortLinkEventUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkEventUpdateManyMutationInput)
    data!: DefinedAcademyShortLinkEventUpdateManyMutationInput;

    @Field(() => DefinedAcademyShortLinkEventWhereInput, {nullable:true})
    @Type(() => DefinedAcademyShortLinkEventWhereInput)
    where?: DefinedAcademyShortLinkEventWhereInput;
}
