import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemScalarWhereInput } from './discart-item-scalar-where.input';
import { Type } from 'class-transformer';
import { DiscartItemUpdateManyMutationInput } from './discart-item-update-many-mutation.input';

@InputType()
export class DiscartItemUpdateManyWithWhereWithoutCreatedByInput {

    @Field(() => DiscartItemScalarWhereInput, {nullable:false})
    @Type(() => DiscartItemScalarWhereInput)
    where!: DiscartItemScalarWhereInput;

    @Field(() => DiscartItemUpdateManyMutationInput, {nullable:false})
    @Type(() => DiscartItemUpdateManyMutationInput)
    data!: DiscartItemUpdateManyMutationInput;
}
