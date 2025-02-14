import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityMemberCreateManyUserInput } from './community-member-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class CommunityMemberCreateManyUserInputEnvelope {

    @Field(() => [CommunityMemberCreateManyUserInput], {nullable:false})
    @Type(() => CommunityMemberCreateManyUserInput)
    data!: Array<CommunityMemberCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
