import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyResourceCreateInput } from './defined-academy-resource-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedAcademyResourceArgs {

    @Field(() => DefinedAcademyResourceCreateInput, {nullable:false})
    @Type(() => DefinedAcademyResourceCreateInput)
    data!: DefinedAcademyResourceCreateInput;
}
