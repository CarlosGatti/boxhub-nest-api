import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConstructionLogCreateManyUserInput } from './construction-log-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ConstructionLogCreateManyUserInputEnvelope {

    @Field(() => [ConstructionLogCreateManyUserInput], {nullable:false})
    @Type(() => ConstructionLogCreateManyUserInput)
    data!: Array<ConstructionLogCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
