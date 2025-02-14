import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunityMemberWhereUniqueInput } from './community-member-where-unique.input';
import { Type } from 'class-transformer';
import { CommunityMemberCreateWithoutUserInput } from './community-member-create-without-user.input';

@InputType()
export class CommunityMemberCreateOrConnectWithoutUserInput {

    @Field(() => CommunityMemberWhereUniqueInput, {nullable:false})
    @Type(() => CommunityMemberWhereUniqueInput)
    where!: Prisma.AtLeast<CommunityMemberWhereUniqueInput, 'id'>;

    @Field(() => CommunityMemberCreateWithoutUserInput, {nullable:false})
    @Type(() => CommunityMemberCreateWithoutUserInput)
    create!: CommunityMemberCreateWithoutUserInput;
}
