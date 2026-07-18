import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyPartnerUpdateInput } from './defined-academy-partner-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerWhereUniqueInput } from './defined-academy-partner-where-unique.input';

@ArgsType()
export class UpdateOneDefinedAcademyPartnerArgs {

    @Field(() => DefinedAcademyPartnerUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerUpdateInput)
    data!: DefinedAcademyPartnerUpdateInput;

    @Field(() => DefinedAcademyPartnerWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>;
}
