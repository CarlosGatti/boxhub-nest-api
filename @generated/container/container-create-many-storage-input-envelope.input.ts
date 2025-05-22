import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContainerCreateManyStorageInput } from './container-create-many-storage.input';
import { Type } from 'class-transformer';

@InputType()
export class ContainerCreateManyStorageInputEnvelope {

    @Field(() => [ContainerCreateManyStorageInput], {nullable:false})
    @Type(() => ContainerCreateManyStorageInput)
    data!: Array<ContainerCreateManyStorageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
