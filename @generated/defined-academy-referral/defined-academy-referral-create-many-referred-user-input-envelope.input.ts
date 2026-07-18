import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCreateManyReferredUserInput } from './defined-academy-referral-create-many-referred-user.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyReferralCreateManyReferredUserInputEnvelope {

    @Field(() => [DefinedAcademyReferralCreateManyReferredUserInput], {nullable:false})
    @Type(() => DefinedAcademyReferralCreateManyReferredUserInput)
    data!: Array<DefinedAcademyReferralCreateManyReferredUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
