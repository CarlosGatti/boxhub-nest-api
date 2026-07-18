import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralSourceType } from './defined-academy-referral-source-type.enum';

@InputType()
export class EnumDefinedAcademyReferralSourceTypeFieldUpdateOperationsInput {

    @Field(() => DefinedAcademyReferralSourceType, {nullable:true})
    set?: keyof typeof DefinedAcademyReferralSourceType;
}
