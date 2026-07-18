import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCategoryCreateManyAcademyInput } from './defined-academy-partner-category-create-many-academy.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyPartnerCategoryCreateManyAcademyInputEnvelope {

    @Field(() => [DefinedAcademyPartnerCategoryCreateManyAcademyInput], {nullable:false})
    @Type(() => DefinedAcademyPartnerCategoryCreateManyAcademyInput)
    data!: Array<DefinedAcademyPartnerCategoryCreateManyAcademyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
