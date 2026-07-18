import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyPartnerUpdateManyMutationInput } from './defined-academy-partner-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerWhereInput } from './defined-academy-partner-where.input';

@ArgsType()
export class UpdateManyDefinedAcademyPartnerArgs {

    @Field(() => DefinedAcademyPartnerUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerUpdateManyMutationInput)
    data!: DefinedAcademyPartnerUpdateManyMutationInput;

    @Field(() => DefinedAcademyPartnerWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereInput)
    where?: DefinedAcademyPartnerWhereInput;
}
