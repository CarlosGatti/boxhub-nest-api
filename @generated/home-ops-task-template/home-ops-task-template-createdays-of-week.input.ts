import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWeekday } from '../prisma/home-ops-weekday.enum';

@InputType()
export class HomeOpsTaskTemplateCreatedaysOfWeekInput {

    @Field(() => [HomeOpsWeekday], {nullable:false})
    set!: Array<keyof typeof HomeOpsWeekday>;
}
