import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerWhereUniqueInput } from './defined-academy-partner-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCreateInput } from './defined-academy-partner-create.input';
import { DefinedAcademyPartnerUpdateInput } from './defined-academy-partner-update.input';

@ArgsType()
export class UpsertOneDefinedAcademyPartnerArgs {

    @Field(() => DefinedAcademyPartnerWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyPartnerCreateInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCreateInput)
    create!: DefinedAcademyPartnerCreateInput;

    @Field(() => DefinedAcademyPartnerUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerUpdateInput)
    update!: DefinedAcademyPartnerUpdateInput;
}
