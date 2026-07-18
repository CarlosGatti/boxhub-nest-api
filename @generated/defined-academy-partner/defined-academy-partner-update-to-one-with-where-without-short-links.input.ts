import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerWhereInput } from './defined-academy-partner-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerUpdateWithoutShortLinksInput } from './defined-academy-partner-update-without-short-links.input';

@InputType()
export class DefinedAcademyPartnerUpdateToOneWithWhereWithoutShortLinksInput {

    @Field(() => DefinedAcademyPartnerWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereInput)
    where?: DefinedAcademyPartnerWhereInput;

    @Field(() => DefinedAcademyPartnerUpdateWithoutShortLinksInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerUpdateWithoutShortLinksInput)
    data!: DefinedAcademyPartnerUpdateWithoutShortLinksInput;
}
