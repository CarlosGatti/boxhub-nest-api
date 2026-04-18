import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedIntakeFormOrderByWithRelationInput } from '../defined-intake-form/defined-intake-form-order-by-with-relation.input';

@InputType()
export class DefinedIntakeAnswerOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    intakeFormId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    questionKey?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    questionLabel?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    answerType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    answerValue?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedIntakeFormOrderByWithRelationInput, {nullable:true})
    intakeForm?: DefinedIntakeFormOrderByWithRelationInput;
}
