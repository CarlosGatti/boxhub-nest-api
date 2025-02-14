import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityPrivacy } from './community-privacy.enum';

@InputType()
export class EnumCommunityPrivacyFieldUpdateOperationsInput {

    @Field(() => CommunityPrivacy, {nullable:true})
    set?: keyof typeof CommunityPrivacy;
}
