import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventMemberScalarWhereInput } from './event-member-scalar-where.input';
import { Type } from 'class-transformer';
import { EventMemberUpdateManyMutationInput } from './event-member-update-many-mutation.input';

@InputType()
export class EventMemberUpdateManyWithWhereWithoutEventInput {

    @Field(() => EventMemberScalarWhereInput, {nullable:false})
    @Type(() => EventMemberScalarWhereInput)
    where!: EventMemberScalarWhereInput;

    @Field(() => EventMemberUpdateManyMutationInput, {nullable:false})
    @Type(() => EventMemberUpdateManyMutationInput)
    data!: EventMemberUpdateManyMutationInput;
}
