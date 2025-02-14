import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';
import { CommunityPrivacy } from '../prisma/community-privacy.enum';
import { CommunityPlanCreateNestedOneWithoutCommunityInput } from '../community-plan/community-plan-create-nested-one-without-community.input';
import { CommunityCreateNestedOneWithoutGroupsInput } from './community-create-nested-one-without-groups.input';
import { CommunityCreateNestedManyWithoutParentCommunityInput } from './community-create-nested-many-without-parent-community.input';
import { CommunityMemberCreateNestedManyWithoutCommunityInput } from '../community-member/community-member-create-nested-many-without-community.input';
import { EventCreateNestedManyWithoutCommunityInput } from '../event/event-create-nested-many-without-community.input';
import { FacetCreateNestedManyWithoutCommunityInput } from '../facet/facet-create-nested-many-without-community.input';
import { PublicationCreateNestedManyWithoutCommunityInput } from '../publication/publication-create-nested-many-without-community.input';

@InputType()
export class CommunityCreateWithoutOwnerInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:true})
    banner?: string;

    @Field(() => String, {nullable:true})
    profilePicture?: string;

    @Field(() => Visibility, {nullable:true})
    visibility?: keyof typeof Visibility;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CommunityPrivacy, {nullable:true})
    postEnabledRole?: keyof typeof CommunityPrivacy;

    @Field(() => CommunityPrivacy, {nullable:true})
    inviteEnabledRole?: keyof typeof CommunityPrivacy;

    @Field(() => CommunityPlanCreateNestedOneWithoutCommunityInput, {nullable:true})
    plan?: CommunityPlanCreateNestedOneWithoutCommunityInput;

    @Field(() => CommunityCreateNestedOneWithoutGroupsInput, {nullable:true})
    parentCommunity?: CommunityCreateNestedOneWithoutGroupsInput;

    @Field(() => CommunityCreateNestedManyWithoutParentCommunityInput, {nullable:true})
    groups?: CommunityCreateNestedManyWithoutParentCommunityInput;

    @Field(() => CommunityMemberCreateNestedManyWithoutCommunityInput, {nullable:true})
    members?: CommunityMemberCreateNestedManyWithoutCommunityInput;

    @Field(() => EventCreateNestedManyWithoutCommunityInput, {nullable:true})
    events?: EventCreateNestedManyWithoutCommunityInput;

    @Field(() => FacetCreateNestedManyWithoutCommunityInput, {nullable:true})
    facets?: FacetCreateNestedManyWithoutCommunityInput;

    @Field(() => PublicationCreateNestedManyWithoutCommunityInput, {nullable:true})
    publications?: PublicationCreateNestedManyWithoutCommunityInput;
}
