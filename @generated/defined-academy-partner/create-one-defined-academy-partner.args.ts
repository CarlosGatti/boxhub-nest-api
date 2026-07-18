import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCreateInput } from './defined-academy-partner-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedAcademyPartnerArgs {

    @Field(() => DefinedAcademyPartnerCreateInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCreateInput)
    data!: DefinedAcademyPartnerCreateInput;
}
