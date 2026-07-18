import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyPartnerWhereInput } from './defined-academy-partner-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedAcademyPartnerArgs {

    @Field(() => DefinedAcademyPartnerWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereInput)
    where?: DefinedAcademyPartnerWhereInput;
}
