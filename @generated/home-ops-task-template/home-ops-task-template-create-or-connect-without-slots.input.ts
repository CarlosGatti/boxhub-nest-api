import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateWhereUniqueInput } from './home-ops-task-template-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateCreateWithoutSlotsInput } from './home-ops-task-template-create-without-slots.input';

@InputType()
export class HomeOpsTaskTemplateCreateOrConnectWithoutSlotsInput {

    @Field(() => HomeOpsTaskTemplateWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsTaskTemplateCreateWithoutSlotsInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateCreateWithoutSlotsInput)
    create!: HomeOpsTaskTemplateCreateWithoutSlotsInput;
}
