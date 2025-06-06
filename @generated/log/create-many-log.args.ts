import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogCreateManyInput } from './log-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyLogArgs {

    @Field(() => [LogCreateManyInput], {nullable:false})
    @Type(() => LogCreateManyInput)
    data!: Array<LogCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
