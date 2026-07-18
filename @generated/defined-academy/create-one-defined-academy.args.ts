import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCreateInput } from './defined-academy-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedAcademyArgs {

    @Field(() => DefinedAcademyCreateInput, {nullable:false})
    @Type(() => DefinedAcademyCreateInput)
    data!: DefinedAcademyCreateInput;
}
