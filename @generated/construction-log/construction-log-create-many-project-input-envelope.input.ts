import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConstructionLogCreateManyProjectInput } from './construction-log-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class ConstructionLogCreateManyProjectInputEnvelope {

    @Field(() => [ConstructionLogCreateManyProjectInput], {nullable:false})
    @Type(() => ConstructionLogCreateManyProjectInput)
    data!: Array<ConstructionLogCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
