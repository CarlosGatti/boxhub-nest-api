import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunityMemberCreateManyInput } from './community-member-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCommunityMemberArgs {

    @Field(() => [CommunityMemberCreateManyInput], {nullable:false})
    @Type(() => CommunityMemberCreateManyInput)
    data!: Array<CommunityMemberCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
