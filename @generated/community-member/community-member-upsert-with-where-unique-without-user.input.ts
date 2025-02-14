import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunityMemberWhereUniqueInput } from './community-member-where-unique.input';
import { Type } from 'class-transformer';
import { CommunityMemberUpdateWithoutUserInput } from './community-member-update-without-user.input';
import { CommunityMemberCreateWithoutUserInput } from './community-member-create-without-user.input';

@InputType()
export class CommunityMemberUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => CommunityMemberWhereUniqueInput, {nullable:false})
    @Type(() => CommunityMemberWhereUniqueInput)
    where!: Prisma.AtLeast<CommunityMemberWhereUniqueInput, 'id'>;

    @Field(() => CommunityMemberUpdateWithoutUserInput, {nullable:false})
    @Type(() => CommunityMemberUpdateWithoutUserInput)
    update!: CommunityMemberUpdateWithoutUserInput;

    @Field(() => CommunityMemberCreateWithoutUserInput, {nullable:false})
    @Type(() => CommunityMemberCreateWithoutUserInput)
    create!: CommunityMemberCreateWithoutUserInput;
}
