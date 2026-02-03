import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceCreateWithoutTemplateInput } from './home-ops-task-instance-create-without-template.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskInstanceCreateOrConnectWithoutTemplateInput } from './home-ops-task-instance-create-or-connect-without-template.input';
import { HomeOpsTaskInstanceUpsertWithWhereUniqueWithoutTemplateInput } from './home-ops-task-instance-upsert-with-where-unique-without-template.input';
import { HomeOpsTaskInstanceCreateManyTemplateInputEnvelope } from './home-ops-task-instance-create-many-template-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskInstanceWhereUniqueInput } from './home-ops-task-instance-where-unique.input';
import { HomeOpsTaskInstanceUpdateWithWhereUniqueWithoutTemplateInput } from './home-ops-task-instance-update-with-where-unique-without-template.input';
import { HomeOpsTaskInstanceUpdateManyWithWhereWithoutTemplateInput } from './home-ops-task-instance-update-many-with-where-without-template.input';
import { HomeOpsTaskInstanceScalarWhereInput } from './home-ops-task-instance-scalar-where.input';

@InputType()
export class HomeOpsTaskInstanceUpdateManyWithoutTemplateNestedInput {

    @Field(() => [HomeOpsTaskInstanceCreateWithoutTemplateInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateWithoutTemplateInput)
    create?: Array<HomeOpsTaskInstanceCreateWithoutTemplateInput>;

    @Field(() => [HomeOpsTaskInstanceCreateOrConnectWithoutTemplateInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateOrConnectWithoutTemplateInput)
    connectOrCreate?: Array<HomeOpsTaskInstanceCreateOrConnectWithoutTemplateInput>;

    @Field(() => [HomeOpsTaskInstanceUpsertWithWhereUniqueWithoutTemplateInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceUpsertWithWhereUniqueWithoutTemplateInput)
    upsert?: Array<HomeOpsTaskInstanceUpsertWithWhereUniqueWithoutTemplateInput>;

    @Field(() => HomeOpsTaskInstanceCreateManyTemplateInputEnvelope, {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateManyTemplateInputEnvelope)
    createMany?: HomeOpsTaskInstanceCreateManyTemplateInputEnvelope;

    @Field(() => [HomeOpsTaskInstanceWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>>;

    @Field(() => [HomeOpsTaskInstanceWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>>;

    @Field(() => [HomeOpsTaskInstanceWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>>;

    @Field(() => [HomeOpsTaskInstanceWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>>;

    @Field(() => [HomeOpsTaskInstanceUpdateWithWhereUniqueWithoutTemplateInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceUpdateWithWhereUniqueWithoutTemplateInput)
    update?: Array<HomeOpsTaskInstanceUpdateWithWhereUniqueWithoutTemplateInput>;

    @Field(() => [HomeOpsTaskInstanceUpdateManyWithWhereWithoutTemplateInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceUpdateManyWithWhereWithoutTemplateInput)
    updateMany?: Array<HomeOpsTaskInstanceUpdateManyWithWhereWithoutTemplateInput>;

    @Field(() => [HomeOpsTaskInstanceScalarWhereInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceScalarWhereInput)
    deleteMany?: Array<HomeOpsTaskInstanceScalarWhereInput>;
}
