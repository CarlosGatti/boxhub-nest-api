import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkCreateInput } from './defined-academy-short-link-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedAcademyShortLinkArgs {

    @Field(() => DefinedAcademyShortLinkCreateInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkCreateInput)
    data!: DefinedAcademyShortLinkCreateInput;
}
