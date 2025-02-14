import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventMemberUpdateManyMutationInput } from './event-member-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EventMemberWhereInput } from './event-member-where.input';

@ArgsType()
export class UpdateManyEventMemberArgs {

    @Field(() => EventMemberUpdateManyMutationInput, {nullable:false})
    @Type(() => EventMemberUpdateManyMutationInput)
    data!: EventMemberUpdateManyMutationInput;

    @Field(() => EventMemberWhereInput, {nullable:true})
    @Type(() => EventMemberWhereInput)
    where?: EventMemberWhereInput;
}
