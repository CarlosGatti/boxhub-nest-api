import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceCreateWithoutTemplateInput } from './home-ops-task-instance-create-without-template.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskInstanceCreateOrConnectWithoutTemplateInput } from './home-ops-task-instance-create-or-connect-without-template.input';
import { HomeOpsTaskInstanceCreateManyTemplateInputEnvelope } from './home-ops-task-instance-create-many-template-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskInstanceWhereUniqueInput } from './home-ops-task-instance-where-unique.input';

@InputType()
export class HomeOpsTaskInstanceUncheckedCreateNestedManyWithoutTemplateInput {

    @Field(() => [HomeOpsTaskInstanceCreateWithoutTemplateInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateWithoutTemplateInput)
    create?: Array<HomeOpsTaskInstanceCreateWithoutTemplateInput>;

    @Field(() => [HomeOpsTaskInstanceCreateOrConnectWithoutTemplateInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateOrConnectWithoutTemplateInput)
    connectOrCreate?: Array<HomeOpsTaskInstanceCreateOrConnectWithoutTemplateInput>;

    @Field(() => HomeOpsTaskInstanceCreateManyTemplateInputEnvelope, {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateManyTemplateInputEnvelope)
    createMany?: HomeOpsTaskInstanceCreateManyTemplateInputEnvelope;

    @Field(() => [HomeOpsTaskInstanceWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>>;
}
