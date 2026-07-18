import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCreateWithoutPartnerCategoriesInput } from './defined-academy-create-without-partner-categories.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateOrConnectWithoutPartnerCategoriesInput } from './defined-academy-create-or-connect-without-partner-categories.input';
import { DefinedAcademyUpsertWithoutPartnerCategoriesInput } from './defined-academy-upsert-without-partner-categories.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';
import { DefinedAcademyUpdateToOneWithWhereWithoutPartnerCategoriesInput } from './defined-academy-update-to-one-with-where-without-partner-categories.input';

@InputType()
export class DefinedAcademyUpdateOneRequiredWithoutPartnerCategoriesNestedInput {

    @Field(() => DefinedAcademyCreateWithoutPartnerCategoriesInput, {nullable:true})
    @Type(() => DefinedAcademyCreateWithoutPartnerCategoriesInput)
    create?: DefinedAcademyCreateWithoutPartnerCategoriesInput;

    @Field(() => DefinedAcademyCreateOrConnectWithoutPartnerCategoriesInput, {nullable:true})
    @Type(() => DefinedAcademyCreateOrConnectWithoutPartnerCategoriesInput)
    connectOrCreate?: DefinedAcademyCreateOrConnectWithoutPartnerCategoriesInput;

    @Field(() => DefinedAcademyUpsertWithoutPartnerCategoriesInput, {nullable:true})
    @Type(() => DefinedAcademyUpsertWithoutPartnerCategoriesInput)
    upsert?: DefinedAcademyUpsertWithoutPartnerCategoriesInput;

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedAcademyUpdateToOneWithWhereWithoutPartnerCategoriesInput, {nullable:true})
    @Type(() => DefinedAcademyUpdateToOneWithWhereWithoutPartnerCategoriesInput)
    update?: DefinedAcademyUpdateToOneWithWhereWithoutPartnerCategoriesInput;
}
