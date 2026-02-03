import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HomeOpsTaskTemplate } from '../home-ops-task-template/home-ops-task-template.model';

@ObjectType()
export class HomeOpsTaskTemplateSlot {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    templateId!: number;

    @Field(() => String, {nullable:false})
    label!: string;

    @Field(() => String, {nullable:false})
    windowStart!: string;

    @Field(() => String, {nullable:false})
    windowEnd!: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => HomeOpsTaskTemplate, {nullable:false})
    template?: HomeOpsTaskTemplate;
}
