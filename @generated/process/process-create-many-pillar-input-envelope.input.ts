import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProcessCreateManyPillarInput } from './process-create-many-pillar.input';
import { Type } from 'class-transformer';

@InputType()
export class ProcessCreateManyPillarInputEnvelope {

    @Field(() => [ProcessCreateManyPillarInput], {nullable:false})
    @Type(() => ProcessCreateManyPillarInput)
    data!: Array<ProcessCreateManyPillarInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
