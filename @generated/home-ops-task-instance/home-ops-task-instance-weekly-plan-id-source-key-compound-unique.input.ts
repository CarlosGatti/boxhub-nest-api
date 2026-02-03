import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class HomeOpsTaskInstanceWeeklyPlanIdSourceKeyCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    weeklyPlanId!: number;

    @Field(() => String, {nullable:false})
    sourceKey!: string;
}
