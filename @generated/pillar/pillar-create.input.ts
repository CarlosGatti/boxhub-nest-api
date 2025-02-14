import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProcessCreateNestedManyWithoutPillarInput } from '../process/process-create-nested-many-without-pillar.input';

@InputType()
export class PillarCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProcessCreateNestedManyWithoutPillarInput, {nullable:true})
    processes?: ProcessCreateNestedManyWithoutPillarInput;
}
