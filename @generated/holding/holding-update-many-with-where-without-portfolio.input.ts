import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HoldingScalarWhereInput } from './holding-scalar-where.input';
import { Type } from 'class-transformer';
import { HoldingUpdateManyMutationInput } from './holding-update-many-mutation.input';

@InputType()
export class HoldingUpdateManyWithWhereWithoutPortfolioInput {

    @Field(() => HoldingScalarWhereInput, {nullable:false})
    @Type(() => HoldingScalarWhereInput)
    where!: HoldingScalarWhereInput;

    @Field(() => HoldingUpdateManyMutationInput, {nullable:false})
    @Type(() => HoldingUpdateManyMutationInput)
    data!: HoldingUpdateManyMutationInput;
}
