import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContainerCreateManyFamilyInput } from './container-create-many-family.input';
import { Type } from 'class-transformer';

@InputType()
export class ContainerCreateManyFamilyInputEnvelope {

    @Field(() => [ContainerCreateManyFamilyInput], {nullable:false})
    @Type(() => ContainerCreateManyFamilyInput)
    data!: Array<ContainerCreateManyFamilyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
