import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerWhereUniqueInput } from './defined-academy-partner-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCreateWithoutAcademyInput } from './defined-academy-partner-create-without-academy.input';

@InputType()
export class DefinedAcademyPartnerCreateOrConnectWithoutAcademyInput {

    @Field(() => DefinedAcademyPartnerWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyPartnerCreateWithoutAcademyInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCreateWithoutAcademyInput)
    create!: DefinedAcademyPartnerCreateWithoutAcademyInput;
}
