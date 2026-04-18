import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DefinedIntakeAnswerMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    intakeFormId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    questionKey?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    questionLabel?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    answerType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
