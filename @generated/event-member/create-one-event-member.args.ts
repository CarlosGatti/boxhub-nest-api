import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventMemberCreateInput } from './event-member-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEventMemberArgs {

    @Field(() => EventMemberCreateInput, {nullable:false})
    @Type(() => EventMemberCreateInput)
    data!: EventMemberCreateInput;
}
