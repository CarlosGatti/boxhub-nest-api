import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';
import { CommunityPrivacy } from '../prisma/community-privacy.enum';

@ObjectType()
export class CommunityMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

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

    @Field(() => Int, {nullable:true})
    communityPlanId?: number;

    @Field(() => CommunityPrivacy, {nullable:true})
    postEnabledRole?: keyof typeof CommunityPrivacy;

    @Field(() => CommunityPrivacy, {nullable:true})
    inviteEnabledRole?: keyof typeof CommunityPrivacy;

    @Field(() => Int, {nullable:true})
    parentCommunityId?: number;
}
