import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerWhereInput } from './defined-academy-partner-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerUpdateWithoutReferralsInput } from './defined-academy-partner-update-without-referrals.input';

@InputType()
export class DefinedAcademyPartnerUpdateToOneWithWhereWithoutReferralsInput {

    @Field(() => DefinedAcademyPartnerWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereInput)
    where?: DefinedAcademyPartnerWhereInput;

    @Field(() => DefinedAcademyPartnerUpdateWithoutReferralsInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerUpdateWithoutReferralsInput)
    data!: DefinedAcademyPartnerUpdateWithoutReferralsInput;
}
