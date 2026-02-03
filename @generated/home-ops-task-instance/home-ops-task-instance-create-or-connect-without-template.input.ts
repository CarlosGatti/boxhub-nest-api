import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskInstanceWhereUniqueInput } from './home-ops-task-instance-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskInstanceCreateWithoutTemplateInput } from './home-ops-task-instance-create-without-template.input';

@InputType()
export class HomeOpsTaskInstanceCreateOrConnectWithoutTemplateInput {

    @Field(() => HomeOpsTaskInstanceWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>;

    @Field(() => HomeOpsTaskInstanceCreateWithoutTemplateInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceCreateWithoutTemplateInput)
    create!: HomeOpsTaskInstanceCreateWithoutTemplateInput;
}
