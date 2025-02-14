import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateNestedManyWithoutOnlineDetailsInput } from '../event/event-create-nested-many-without-online-details.input';

@InputType()
export class EventOnlineDetailCreateInput {

    @Field(() => String, {nullable:false})
    platform!: string;

    @Field(() => String, {nullable:false})
    link!: string;

    @Field(() => String, {nullable:true})
    joinCode?: string;

    @Field(() => String, {nullable:true})
    joinDetails?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => EventCreateNestedManyWithoutOnlineDetailsInput, {nullable:true})
    event?: EventCreateNestedManyWithoutOnlineDetailsInput;
}
