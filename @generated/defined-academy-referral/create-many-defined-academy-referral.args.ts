import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyReferralCreateManyInput } from './defined-academy-referral-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedAcademyReferralArgs {

    @Field(() => [DefinedAcademyReferralCreateManyInput], {nullable:false})
    @Type(() => DefinedAcademyReferralCreateManyInput)
    data!: Array<DefinedAcademyReferralCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
