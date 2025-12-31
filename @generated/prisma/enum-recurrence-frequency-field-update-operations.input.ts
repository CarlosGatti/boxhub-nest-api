import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecurrenceFrequency } from './recurrence-frequency.enum';

@InputType()
export class EnumRecurrenceFrequencyFieldUpdateOperationsInput {

    @Field(() => RecurrenceFrequency, {nullable:true})
    set?: keyof typeof RecurrenceFrequency;
}
