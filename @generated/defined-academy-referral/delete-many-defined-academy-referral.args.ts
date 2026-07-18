import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyReferralWhereInput } from './defined-academy-referral-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedAcademyReferralArgs {

    @Field(() => DefinedAcademyReferralWhereInput, {nullable:true})
    @Type(() => DefinedAcademyReferralWhereInput)
    where?: DefinedAcademyReferralWhereInput;
}
