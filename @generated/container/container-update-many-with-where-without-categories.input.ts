import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContainerScalarWhereInput } from './container-scalar-where.input';
import { Type } from 'class-transformer';
import { ContainerUpdateManyMutationInput } from './container-update-many-mutation.input';

@InputType()
export class ContainerUpdateManyWithWhereWithoutCategoriesInput {

    @Field(() => ContainerScalarWhereInput, {nullable:false})
    @Type(() => ContainerScalarWhereInput)
    where!: ContainerScalarWhereInput;

    @Field(() => ContainerUpdateManyMutationInput, {nullable:false})
    @Type(() => ContainerUpdateManyMutationInput)
    data!: ContainerUpdateManyMutationInput;
}
