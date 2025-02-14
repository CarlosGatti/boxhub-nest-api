import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipStatus } from './membership-status.enum';

@InputType()
export class EnumMembershipStatusFieldUpdateOperationsInput {

    @Field(() => MembershipStatus, {nullable:true})
    set?: keyof typeof MembershipStatus;
}
