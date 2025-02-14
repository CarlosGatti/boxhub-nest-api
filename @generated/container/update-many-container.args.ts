import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContainerUpdateManyMutationInput } from './container-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ContainerWhereInput } from './container-where.input';

@ArgsType()
export class UpdateManyContainerArgs {

    @Field(() => ContainerUpdateManyMutationInput, {nullable:false})
    @Type(() => ContainerUpdateManyMutationInput)
    data!: ContainerUpdateManyMutationInput;

    @Field(() => ContainerWhereInput, {nullable:true})
    @Type(() => ContainerWhereInput)
    where?: ContainerWhereInput;
}
