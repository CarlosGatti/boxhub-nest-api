import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientWhereInput } from './defined-client-where.input';
import { Type } from 'class-transformer';
import { DefinedClientUpdateWithoutProjectsInput } from './defined-client-update-without-projects.input';

@InputType()
export class DefinedClientUpdateToOneWithWhereWithoutProjectsInput {

    @Field(() => DefinedClientWhereInput, {nullable:true})
    @Type(() => DefinedClientWhereInput)
    where?: DefinedClientWhereInput;

    @Field(() => DefinedClientUpdateWithoutProjectsInput, {nullable:false})
    @Type(() => DefinedClientUpdateWithoutProjectsInput)
    data!: DefinedClientUpdateWithoutProjectsInput;
}
