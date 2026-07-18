import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkWhereInput } from './defined-academy-short-link-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedAcademyShortLinkArgs {

    @Field(() => DefinedAcademyShortLinkWhereInput, {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereInput)
    where?: DefinedAcademyShortLinkWhereInput;
}
