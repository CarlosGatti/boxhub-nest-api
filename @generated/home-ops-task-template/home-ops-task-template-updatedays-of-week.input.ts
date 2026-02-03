import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWeekday } from '../prisma/home-ops-weekday.enum';

@InputType()
export class HomeOpsTaskTemplateUpdatedaysOfWeekInput {

    @Field(() => [HomeOpsWeekday], {nullable:true})
    set?: Array<keyof typeof HomeOpsWeekday>;

    @Field(() => [HomeOpsWeekday], {nullable:true})
    push?: Array<keyof typeof HomeOpsWeekday>;
}
