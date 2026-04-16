import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientUpdateWithoutProjectsInput } from './defined-client-update-without-projects.input';
import { Type } from 'class-transformer';
import { DefinedClientCreateWithoutProjectsInput } from './defined-client-create-without-projects.input';
import { DefinedClientWhereInput } from './defined-client-where.input';

@InputType()
export class DefinedClientUpsertWithoutProjectsInput {

    @Field(() => DefinedClientUpdateWithoutProjectsInput, {nullable:false})
    @Type(() => DefinedClientUpdateWithoutProjectsInput)
    update!: DefinedClientUpdateWithoutProjectsInput;

    @Field(() => DefinedClientCreateWithoutProjectsInput, {nullable:false})
    @Type(() => DefinedClientCreateWithoutProjectsInput)
    create!: DefinedClientCreateWithoutProjectsInput;

    @Field(() => DefinedClientWhereInput, {nullable:true})
    @Type(() => DefinedClientWhereInput)
    where?: DefinedClientWhereInput;
}
