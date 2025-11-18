import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemCreateManyCreatedByInput } from './discart-item-create-many-created-by.input';
import { Type } from 'class-transformer';

@InputType()
export class DiscartItemCreateManyCreatedByInputEnvelope {

    @Field(() => [DiscartItemCreateManyCreatedByInput], {nullable:false})
    @Type(() => DiscartItemCreateManyCreatedByInput)
    data!: Array<DiscartItemCreateManyCreatedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
