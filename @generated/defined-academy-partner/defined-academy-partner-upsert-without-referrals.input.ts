import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerUpdateWithoutReferralsInput } from './defined-academy-partner-update-without-referrals.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCreateWithoutReferralsInput } from './defined-academy-partner-create-without-referrals.input';
import { DefinedAcademyPartnerWhereInput } from './defined-academy-partner-where.input';

@InputType()
export class DefinedAcademyPartnerUpsertWithoutReferralsInput {

    @Field(() => DefinedAcademyPartnerUpdateWithoutReferralsInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerUpdateWithoutReferralsInput)
    update!: DefinedAcademyPartnerUpdateWithoutReferralsInput;

    @Field(() => DefinedAcademyPartnerCreateWithoutReferralsInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCreateWithoutReferralsInput)
    create!: DefinedAcademyPartnerCreateWithoutReferralsInput;

    @Field(() => DefinedAcademyPartnerWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereInput)
    where?: DefinedAcademyPartnerWhereInput;
}
