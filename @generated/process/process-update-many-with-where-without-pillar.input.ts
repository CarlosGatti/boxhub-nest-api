import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProcessScalarWhereInput } from './process-scalar-where.input';
import { Type } from 'class-transformer';
import { ProcessUpdateManyMutationInput } from './process-update-many-mutation.input';

@InputType()
export class ProcessUpdateManyWithWhereWithoutPillarInput {

    @Field(() => ProcessScalarWhereInput, {nullable:false})
    @Type(() => ProcessScalarWhereInput)
    where!: ProcessScalarWhereInput;

    @Field(() => ProcessUpdateManyMutationInput, {nullable:false})
    @Type(() => ProcessUpdateManyMutationInput)
    data!: ProcessUpdateManyMutationInput;
}
