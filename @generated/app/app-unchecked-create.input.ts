import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserAppAccessUncheckedCreateNestedManyWithoutAppInput } from '../user-app-access/user-app-access-unchecked-create-nested-many-without-app.input';
import { FeedbackUncheckedCreateNestedManyWithoutTargetAppInput } from '../feedback/feedback-unchecked-create-nested-many-without-target-app.input';
import { HomeOpsHouseholdUncheckedCreateNestedManyWithoutAppInput } from '../home-ops-household/home-ops-household-unchecked-create-nested-many-without-app.input';

@InputType()
export class AppUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserAppAccessUncheckedCreateNestedManyWithoutAppInput, {nullable:true})
    users?: UserAppAccessUncheckedCreateNestedManyWithoutAppInput;

    @Field(() => FeedbackUncheckedCreateNestedManyWithoutTargetAppInput, {nullable:true})
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutTargetAppInput;

    @Field(() => HomeOpsHouseholdUncheckedCreateNestedManyWithoutAppInput, {nullable:true})
    homeOpsHouseholds?: HomeOpsHouseholdUncheckedCreateNestedManyWithoutAppInput;
}
