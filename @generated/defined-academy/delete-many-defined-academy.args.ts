import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedAcademyArgs {

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyWhereInput)
    where?: DefinedAcademyWhereInput;
}
