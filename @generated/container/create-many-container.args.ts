import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContainerCreateManyInput } from './container-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyContainerArgs {

    @Field(() => [ContainerCreateManyInput], {nullable:false})
    @Type(() => ContainerCreateManyInput)
    data!: Array<ContainerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
