import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyReferralCreateInput } from './defined-academy-referral-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedAcademyReferralArgs {

    @Field(() => DefinedAcademyReferralCreateInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCreateInput)
    data!: DefinedAcademyReferralCreateInput;
}
