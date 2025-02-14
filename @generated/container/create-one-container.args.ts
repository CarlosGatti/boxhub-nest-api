import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContainerCreateInput } from './container-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneContainerArgs {

    @Field(() => ContainerCreateInput, {nullable:false})
    @Type(() => ContainerCreateInput)
    data!: ContainerCreateInput;
}
