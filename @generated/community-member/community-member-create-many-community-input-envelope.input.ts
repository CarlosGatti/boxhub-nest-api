import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityMemberCreateManyCommunityInput } from './community-member-create-many-community.input';
import { Type } from 'class-transformer';

@InputType()
export class CommunityMemberCreateManyCommunityInputEnvelope {

    @Field(() => [CommunityMemberCreateManyCommunityInput], {nullable:false})
    @Type(() => CommunityMemberCreateManyCommunityInput)
    data!: Array<CommunityMemberCreateManyCommunityInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
