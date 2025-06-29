import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConstructionLogScalarWhereInput } from './construction-log-scalar-where.input';
import { Type } from 'class-transformer';
import { ConstructionLogUpdateManyMutationInput } from './construction-log-update-many-mutation.input';

@InputType()
export class ConstructionLogUpdateManyWithWhereWithoutProjectInput {

    @Field(() => ConstructionLogScalarWhereInput, {nullable:false})
    @Type(() => ConstructionLogScalarWhereInput)
    where!: ConstructionLogScalarWhereInput;

    @Field(() => ConstructionLogUpdateManyMutationInput, {nullable:false})
    @Type(() => ConstructionLogUpdateManyMutationInput)
    data!: ConstructionLogUpdateManyMutationInput;
}
