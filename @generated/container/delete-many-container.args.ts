import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContainerWhereInput } from './container-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyContainerArgs {

    @Field(() => ContainerWhereInput, {nullable:true})
    @Type(() => ContainerWhereInput)
    where?: ContainerWhereInput;
}
