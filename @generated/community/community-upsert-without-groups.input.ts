import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityUpdateWithoutGroupsInput } from './community-update-without-groups.input';
import { Type } from 'class-transformer';
import { CommunityCreateWithoutGroupsInput } from './community-create-without-groups.input';
import { CommunityWhereInput } from './community-where.input';

@InputType()
export class CommunityUpsertWithoutGroupsInput {

    @Field(() => CommunityUpdateWithoutGroupsInput, {nullable:false})
    @Type(() => CommunityUpdateWithoutGroupsInput)
    update!: CommunityUpdateWithoutGroupsInput;

    @Field(() => CommunityCreateWithoutGroupsInput, {nullable:false})
    @Type(() => CommunityCreateWithoutGroupsInput)
    create!: CommunityCreateWithoutGroupsInput;

    @Field(() => CommunityWhereInput, {nullable:true})
    @Type(() => CommunityWhereInput)
    where?: CommunityWhereInput;
}
