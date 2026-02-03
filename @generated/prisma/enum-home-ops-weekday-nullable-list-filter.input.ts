import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWeekday } from './home-ops-weekday.enum';

@InputType()
export class EnumHomeOpsWeekdayNullableListFilter {

    @Field(() => [HomeOpsWeekday], {nullable:true})
    equals?: Array<keyof typeof HomeOpsWeekday>;

    @Field(() => HomeOpsWeekday, {nullable:true})
    has?: keyof typeof HomeOpsWeekday;

    @Field(() => [HomeOpsWeekday], {nullable:true})
    hasEvery?: Array<keyof typeof HomeOpsWeekday>;

    @Field(() => [HomeOpsWeekday], {nullable:true})
    hasSome?: Array<keyof typeof HomeOpsWeekday>;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}
