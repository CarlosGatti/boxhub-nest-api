import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityWhereInput } from './community-where.input';
import { Type } from 'class-transformer';
import { CommunityUpdateWithoutEventsInput } from './community-update-without-events.input';

@InputType()
export class CommunityUpdateToOneWithWhereWithoutEventsInput {

    @Field(() => CommunityWhereInput, {nullable:true})
    @Type(() => CommunityWhereInput)
    where?: CommunityWhereInput;

    @Field(() => CommunityUpdateWithoutEventsInput, {nullable:false})
    @Type(() => CommunityUpdateWithoutEventsInput)
    data!: CommunityUpdateWithoutEventsInput;
}
