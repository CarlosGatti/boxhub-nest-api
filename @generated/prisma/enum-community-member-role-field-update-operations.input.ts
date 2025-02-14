import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityMemberRole } from './community-member-role.enum';

@InputType()
export class EnumCommunityMemberRoleFieldUpdateOperationsInput {

    @Field(() => CommunityMemberRole, {nullable:true})
    set?: keyof typeof CommunityMemberRole;
}
