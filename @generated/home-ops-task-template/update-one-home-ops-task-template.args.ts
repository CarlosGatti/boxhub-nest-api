import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateUpdateInput } from './home-ops-task-template-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateWhereUniqueInput } from './home-ops-task-template-where-unique.input';

@ArgsType()
export class UpdateOneHomeOpsTaskTemplateArgs {

    @Field(() => HomeOpsTaskTemplateUpdateInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateUpdateInput)
    data!: HomeOpsTaskTemplateUpdateInput;

    @Field(() => HomeOpsTaskTemplateWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>;
}
