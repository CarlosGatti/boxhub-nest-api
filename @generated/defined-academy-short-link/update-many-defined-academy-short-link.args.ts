import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkUpdateManyMutationInput } from './defined-academy-short-link-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkWhereInput } from './defined-academy-short-link-where.input';

@ArgsType()
export class UpdateManyDefinedAcademyShortLinkArgs {

    @Field(() => DefinedAcademyShortLinkUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkUpdateManyMutationInput)
    data!: DefinedAcademyShortLinkUpdateManyMutationInput;

    @Field(() => DefinedAcademyShortLinkWhereInput, {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereInput)
    where?: DefinedAcademyShortLinkWhereInput;
}
