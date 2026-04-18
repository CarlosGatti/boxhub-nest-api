import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DefinedIntakeAnswerMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    intakeFormId?: true;

    @Field(() => Boolean, {nullable:true})
    questionKey?: true;

    @Field(() => Boolean, {nullable:true})
    questionLabel?: true;

    @Field(() => Boolean, {nullable:true})
    answerType?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
