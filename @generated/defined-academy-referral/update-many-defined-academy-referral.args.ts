import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyReferralUpdateManyMutationInput } from './defined-academy-referral-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralWhereInput } from './defined-academy-referral-where.input';

@ArgsType()
export class UpdateManyDefinedAcademyReferralArgs {

    @Field(() => DefinedAcademyReferralUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyReferralUpdateManyMutationInput)
    data!: DefinedAcademyReferralUpdateManyMutationInput;

    @Field(() => DefinedAcademyReferralWhereInput, {nullable:true})
    @Type(() => DefinedAcademyReferralWhereInput)
    where?: DefinedAcademyReferralWhereInput;
}
