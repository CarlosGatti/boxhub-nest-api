import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityUpdateWithoutEventsInput } from './community-update-without-events.input';
import { Type } from 'class-transformer';
import { CommunityCreateWithoutEventsInput } from './community-create-without-events.input';
import { CommunityWhereInput } from './community-where.input';

@InputType()
export class CommunityUpsertWithoutEventsInput {

    @Field(() => CommunityUpdateWithoutEventsInput, {nullable:false})
    @Type(() => CommunityUpdateWithoutEventsInput)
    update!: CommunityUpdateWithoutEventsInput;

    @Field(() => CommunityCreateWithoutEventsInput, {nullable:false})
    @Type(() => CommunityCreateWithoutEventsInput)
    create!: CommunityCreateWithoutEventsInput;

    @Field(() => CommunityWhereInput, {nullable:true})
    @Type(() => CommunityWhereInput)
    where?: CommunityWhereInput;
}
