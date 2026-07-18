import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCreateManyAcademyInput } from './defined-academy-partner-create-many-academy.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyPartnerCreateManyAcademyInputEnvelope {

    @Field(() => [DefinedAcademyPartnerCreateManyAcademyInput], {nullable:false})
    @Type(() => DefinedAcademyPartnerCreateManyAcademyInput)
    data!: Array<DefinedAcademyPartnerCreateManyAcademyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
