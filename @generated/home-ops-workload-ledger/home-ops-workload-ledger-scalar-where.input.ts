import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class HomeOpsWorkloadLedgerScalarWhereInput {

    @Field(() => [HomeOpsWorkloadLedgerScalarWhereInput], {nullable:true})
    AND?: Array<HomeOpsWorkloadLedgerScalarWhereInput>;

    @Field(() => [HomeOpsWorkloadLedgerScalarWhereInput], {nullable:true})
    OR?: Array<HomeOpsWorkloadLedgerScalarWhereInput>;

    @Field(() => [HomeOpsWorkloadLedgerScalarWhereInput], {nullable:true})
    NOT?: Array<HomeOpsWorkloadLedgerScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    householdId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    weekStart?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    pointsCompleted?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    minutesCompleted?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    tasksCompleted?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
