import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventMemberWhereInput } from './event-member-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyEventMemberArgs {

    @Field(() => EventMemberWhereInput, {nullable:true})
    @Type(() => EventMemberWhereInput)
    where?: EventMemberWhereInput;
}
