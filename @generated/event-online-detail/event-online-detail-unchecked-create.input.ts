import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventUncheckedCreateNestedManyWithoutOnlineDetailsInput } from '../event/event-unchecked-create-nested-many-without-online-details.input';

@InputType()
export class EventOnlineDetailUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => EventUncheckedCreateNestedManyWithoutOnlineDetailsInput, {nullable:true})
    event?: EventUncheckedCreateNestedManyWithoutOnlineDetailsInput;
}
