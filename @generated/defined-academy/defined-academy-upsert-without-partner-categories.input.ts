import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUpdateWithoutPartnerCategoriesInput } from './defined-academy-update-without-partner-categories.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateWithoutPartnerCategoriesInput } from './defined-academy-create-without-partner-categories.input';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';

@InputType()
export class DefinedAcademyUpsertWithoutPartnerCategoriesInput {

    @Field(() => DefinedAcademyUpdateWithoutPartnerCategoriesInput, {nullable:false})
    @Type(() => DefinedAcademyUpdateWithoutPartnerCategoriesInput)
    update!: DefinedAcademyUpdateWithoutPartnerCategoriesInput;

    @Field(() => DefinedAcademyCreateWithoutPartnerCategoriesInput, {nullable:false})
    @Type(() => DefinedAcademyCreateWithoutPartnerCategoriesInput)
    create!: DefinedAcademyCreateWithoutPartnerCategoriesInput;

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyWhereInput)
    where?: DefinedAcademyWhereInput;
}
