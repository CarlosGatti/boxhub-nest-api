import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerWhereUniqueInput } from './defined-academy-partner-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCreateWithoutCategoryInput } from './defined-academy-partner-create-without-category.input';

@InputType()
export class DefinedAcademyPartnerCreateOrConnectWithoutCategoryInput {

    @Field(() => DefinedAcademyPartnerWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyPartnerCreateWithoutCategoryInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCreateWithoutCategoryInput)
    create!: DefinedAcademyPartnerCreateWithoutCategoryInput;
}
