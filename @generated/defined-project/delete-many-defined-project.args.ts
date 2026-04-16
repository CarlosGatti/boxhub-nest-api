import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProjectWhereInput } from './defined-project-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedProjectArgs {

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    where?: DefinedProjectWhereInput;
}
