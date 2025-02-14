import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateManyCommunityInput } from './event-create-many-community.input';
import { Type } from 'class-transformer';

@InputType()
export class EventCreateManyCommunityInputEnvelope {

    @Field(() => [EventCreateManyCommunityInput], {nullable:false})
    @Type(() => EventCreateManyCommunityInput)
    data!: Array<EventCreateManyCommunityInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
