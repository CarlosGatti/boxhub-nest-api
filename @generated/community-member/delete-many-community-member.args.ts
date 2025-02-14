import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunityMemberWhereInput } from './community-member-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCommunityMemberArgs {

    @Field(() => CommunityMemberWhereInput, {nullable:true})
    @Type(() => CommunityMemberWhereInput)
    where?: CommunityMemberWhereInput;
}
