import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralStatus } from './defined-academy-referral-status.enum';

@InputType()
export class EnumDefinedAcademyReferralStatusFieldUpdateOperationsInput {

    @Field(() => DefinedAcademyReferralStatus, {nullable:true})
    set?: keyof typeof DefinedAcademyReferralStatus;
}
