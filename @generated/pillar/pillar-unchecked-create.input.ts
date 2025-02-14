import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProcessUncheckedCreateNestedManyWithoutPillarInput } from '../process/process-unchecked-create-nested-many-without-pillar.input';

@InputType()
export class PillarUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProcessUncheckedCreateNestedManyWithoutPillarInput, {nullable:true})
    processes?: ProcessUncheckedCreateNestedManyWithoutPillarInput;
}
