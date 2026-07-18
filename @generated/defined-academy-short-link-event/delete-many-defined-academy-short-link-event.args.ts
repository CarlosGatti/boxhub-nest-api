import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkEventWhereInput } from './defined-academy-short-link-event-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedAcademyShortLinkEventArgs {

    @Field(() => DefinedAcademyShortLinkEventWhereInput, {nullable:true})
    @Type(() => DefinedAcademyShortLinkEventWhereInput)
    where?: DefinedAcademyShortLinkEventWhereInput;
}
