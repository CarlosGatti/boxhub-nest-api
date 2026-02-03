import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsFrequency } from './home-ops-frequency.enum';

@InputType()
export class EnumHomeOpsFrequencyFieldUpdateOperationsInput {

    @Field(() => HomeOpsFrequency, {nullable:true})
    set?: keyof typeof HomeOpsFrequency;
}
