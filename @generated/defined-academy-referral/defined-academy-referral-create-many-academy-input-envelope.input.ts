import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCreateManyAcademyInput } from './defined-academy-referral-create-many-academy.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyReferralCreateManyAcademyInputEnvelope {

    @Field(() => [DefinedAcademyReferralCreateManyAcademyInput], {nullable:false})
    @Type(() => DefinedAcademyReferralCreateManyAcademyInput)
    data!: Array<DefinedAcademyReferralCreateManyAcademyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
