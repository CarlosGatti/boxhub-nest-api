import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';
import { CommunityPrivacy } from '../prisma/community-privacy.enum';
import { CommunityUncheckedCreateNestedManyWithoutParentCommunityInput } from './community-unchecked-create-nested-many-without-parent-community.input';
import { CommunityMemberUncheckedCreateNestedManyWithoutCommunityInput } from '../community-member/community-member-unchecked-create-nested-many-without-community.input';
import { EventUncheckedCreateNestedManyWithoutCommunityInput } from '../event/event-unchecked-create-nested-many-without-community.input';
import { FacetUncheckedCreateNestedManyWithoutCommunityInput } from '../facet/facet-unchecked-create-nested-many-without-community.input';
import { PublicationUncheckedCreateNestedManyWithoutCommunityInput } from '../publication/publication-unchecked-create-nested-many-without-community.input';

@InputType()
export class CommunityUncheckedCreateWithoutPlanInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Int, {nullable:true})
    ownerId?: number;

    @Field(() => CommunityPrivacy, {nullable:true})
    postEnabledRole?: keyof typeof CommunityPrivacy;

    @Field(() => CommunityPrivacy, {nullable:true})
    inviteEnabledRole?: keyof typeof CommunityPrivacy;

    @Field(() => Int, {nullable:true})
    parentCommunityId?: number;

    @Field(() => CommunityUncheckedCreateNestedManyWithoutParentCommunityInput, {nullable:true})
    groups?: CommunityUncheckedCreateNestedManyWithoutParentCommunityInput;

    @Field(() => CommunityMemberUncheckedCreateNestedManyWithoutCommunityInput, {nullable:true})
    members?: CommunityMemberUncheckedCreateNestedManyWithoutCommunityInput;

    @Field(() => EventUncheckedCreateNestedManyWithoutCommunityInput, {nullable:true})
    events?: EventUncheckedCreateNestedManyWithoutCommunityInput;

    @Field(() => FacetUncheckedCreateNestedManyWithoutCommunityInput, {nullable:true})
    facets?: FacetUncheckedCreateNestedManyWithoutCommunityInput;

    @Field(() => PublicationUncheckedCreateNestedManyWithoutCommunityInput, {nullable:true})
    publications?: PublicationUncheckedCreateNestedManyWithoutCommunityInput;
}
