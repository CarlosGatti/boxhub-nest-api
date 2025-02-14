import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventMemberCreateManyInput } from './event-member-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyEventMemberArgs {

    @Field(() => [EventMemberCreateManyInput], {nullable:false})
    @Type(() => EventMemberCreateManyInput)
    data!: Array<EventMemberCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
