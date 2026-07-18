import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCreateWithoutPartnerCategoriesInput } from './defined-academy-create-without-partner-categories.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateOrConnectWithoutPartnerCategoriesInput } from './defined-academy-create-or-connect-without-partner-categories.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';

@InputType()
export class DefinedAcademyCreateNestedOneWithoutPartnerCategoriesInput {

    @Field(() => DefinedAcademyCreateWithoutPartnerCategoriesInput, {nullable:true})
    @Type(() => DefinedAcademyCreateWithoutPartnerCategoriesInput)
    create?: DefinedAcademyCreateWithoutPartnerCategoriesInput;

    @Field(() => DefinedAcademyCreateOrConnectWithoutPartnerCategoriesInput, {nullable:true})
    @Type(() => DefinedAcademyCreateOrConnectWithoutPartnerCategoriesInput)
    connectOrCreate?: DefinedAcademyCreateOrConnectWithoutPartnerCategoriesInput;

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;
}
