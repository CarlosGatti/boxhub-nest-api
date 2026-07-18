import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateWithoutPartnerCategoriesInput } from './defined-academy-create-without-partner-categories.input';

@InputType()
export class DefinedAcademyCreateOrConnectWithoutPartnerCategoriesInput {

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedAcademyCreateWithoutPartnerCategoriesInput, {nullable:false})
    @Type(() => DefinedAcademyCreateWithoutPartnerCategoriesInput)
    create!: DefinedAcademyCreateWithoutPartnerCategoriesInput;
}
