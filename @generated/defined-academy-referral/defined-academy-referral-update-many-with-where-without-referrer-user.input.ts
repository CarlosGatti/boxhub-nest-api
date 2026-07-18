import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralScalarWhereInput } from './defined-academy-referral-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralUpdateManyMutationInput } from './defined-academy-referral-update-many-mutation.input';

@InputType()
export class DefinedAcademyReferralUpdateManyWithWhereWithoutReferrerUserInput {

    @Field(() => DefinedAcademyReferralScalarWhereInput, {nullable:false})
    @Type(() => DefinedAcademyReferralScalarWhereInput)
    where!: DefinedAcademyReferralScalarWhereInput;

    @Field(() => DefinedAcademyReferralUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyReferralUpdateManyMutationInput)
    data!: DefinedAcademyReferralUpdateManyMutationInput;
}
