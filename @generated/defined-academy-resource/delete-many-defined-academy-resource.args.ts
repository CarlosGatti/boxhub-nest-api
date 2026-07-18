import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyResourceWhereInput } from './defined-academy-resource-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedAcademyResourceArgs {

    @Field(() => DefinedAcademyResourceWhereInput, {nullable:true})
    @Type(() => DefinedAcademyResourceWhereInput)
    where?: DefinedAcademyResourceWhereInput;
}
