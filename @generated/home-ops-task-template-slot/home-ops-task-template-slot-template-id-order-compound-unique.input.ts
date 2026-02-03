import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class HomeOpsTaskTemplateSlotTemplateIdOrderCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    templateId!: number;

    @Field(() => Int, {nullable:false})
    order!: number;
}
