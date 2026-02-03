import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateWhereInput } from './home-ops-task-template-where.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateOrderByWithRelationInput } from './home-ops-task-template-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateWhereUniqueInput } from './home-ops-task-template-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HomeOpsTaskTemplateScalarFieldEnum } from './home-ops-task-template-scalar-field.enum';

@ArgsType()
export class FindFirstHomeOpsTaskTemplateOrThrowArgs {

    @Field(() => HomeOpsTaskTemplateWhereInput, {nullable:true})
    @Type(() => HomeOpsTaskTemplateWhereInput)
    where?: HomeOpsTaskTemplateWhereInput;

    @Field(() => [HomeOpsTaskTemplateOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HomeOpsTaskTemplateOrderByWithRelationInput>;

    @Field(() => HomeOpsTaskTemplateWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [HomeOpsTaskTemplateScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HomeOpsTaskTemplateScalarFieldEnum>;
}
