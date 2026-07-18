import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCreateManyReferrerUserInput } from './defined-academy-referral-create-many-referrer-user.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyReferralCreateManyReferrerUserInputEnvelope {

    @Field(() => [DefinedAcademyReferralCreateManyReferrerUserInput], {nullable:false})
    @Type(() => DefinedAcademyReferralCreateManyReferrerUserInput)
    data!: Array<DefinedAcademyReferralCreateManyReferrerUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
