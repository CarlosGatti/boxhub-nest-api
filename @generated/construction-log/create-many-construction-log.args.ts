import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConstructionLogCreateManyInput } from './construction-log-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyConstructionLogArgs {

    @Field(() => [ConstructionLogCreateManyInput], {nullable:false})
    @Type(() => ConstructionLogCreateManyInput)
    data!: Array<ConstructionLogCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
