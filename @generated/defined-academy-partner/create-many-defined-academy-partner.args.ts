import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCreateManyInput } from './defined-academy-partner-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedAcademyPartnerArgs {

    @Field(() => [DefinedAcademyPartnerCreateManyInput], {nullable:false})
    @Type(() => DefinedAcademyPartnerCreateManyInput)
    data!: Array<DefinedAcademyPartnerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
