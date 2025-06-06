import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCreateManyUserInput } from './log-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class LogCreateManyUserInputEnvelope {

    @Field(() => [LogCreateManyUserInput], {nullable:false})
    @Type(() => LogCreateManyUserInput)
    data!: Array<LogCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
