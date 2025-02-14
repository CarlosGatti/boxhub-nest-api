import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventMemberRole } from './event-member-role.enum';

@InputType()
export class EnumEventMemberRoleFieldUpdateOperationsInput {

    @Field(() => EventMemberRole, {nullable:true})
    set?: keyof typeof EventMemberRole;
}
