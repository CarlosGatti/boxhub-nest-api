import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCreateManyPartnerInput } from './defined-academy-referral-create-many-partner.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyReferralCreateManyPartnerInputEnvelope {

    @Field(() => [DefinedAcademyReferralCreateManyPartnerInput], {nullable:false})
    @Type(() => DefinedAcademyReferralCreateManyPartnerInput)
    data!: Array<DefinedAcademyReferralCreateManyPartnerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
