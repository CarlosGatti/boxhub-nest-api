import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerUpdateWithoutShortLinksInput } from './defined-academy-partner-update-without-short-links.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCreateWithoutShortLinksInput } from './defined-academy-partner-create-without-short-links.input';
import { DefinedAcademyPartnerWhereInput } from './defined-academy-partner-where.input';

@InputType()
export class DefinedAcademyPartnerUpsertWithoutShortLinksInput {

    @Field(() => DefinedAcademyPartnerUpdateWithoutShortLinksInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerUpdateWithoutShortLinksInput)
    update!: DefinedAcademyPartnerUpdateWithoutShortLinksInput;

    @Field(() => DefinedAcademyPartnerCreateWithoutShortLinksInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCreateWithoutShortLinksInput)
    create!: DefinedAcademyPartnerCreateWithoutShortLinksInput;

    @Field(() => DefinedAcademyPartnerWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereInput)
    where?: DefinedAcademyPartnerWhereInput;
}
