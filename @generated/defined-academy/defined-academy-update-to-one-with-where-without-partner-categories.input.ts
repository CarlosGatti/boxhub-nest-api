import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUpdateWithoutPartnerCategoriesInput } from './defined-academy-update-without-partner-categories.input';

@InputType()
export class DefinedAcademyUpdateToOneWithWhereWithoutPartnerCategoriesInput {

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyWhereInput)
    where?: DefinedAcademyWhereInput;

    @Field(() => DefinedAcademyUpdateWithoutPartnerCategoriesInput, {nullable:false})
    @Type(() => DefinedAcademyUpdateWithoutPartnerCategoriesInput)
    data!: DefinedAcademyUpdateWithoutPartnerCategoriesInput;
}
