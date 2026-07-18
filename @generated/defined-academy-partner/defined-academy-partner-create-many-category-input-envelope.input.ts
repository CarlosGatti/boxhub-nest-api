import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCreateManyCategoryInput } from './defined-academy-partner-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyPartnerCreateManyCategoryInputEnvelope {

    @Field(() => [DefinedAcademyPartnerCreateManyCategoryInput], {nullable:false})
    @Type(() => DefinedAcademyPartnerCreateManyCategoryInput)
    data!: Array<DefinedAcademyPartnerCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
