import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkEventCreateInput } from './defined-academy-short-link-event-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedAcademyShortLinkEventArgs {

    @Field(() => DefinedAcademyShortLinkEventCreateInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkEventCreateInput)
    data!: DefinedAcademyShortLinkEventCreateInput;
}
