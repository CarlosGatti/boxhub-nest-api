import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FamilyWhereInput } from './family-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFamilyArgs {

    @Field(() => FamilyWhereInput, {nullable:true})
    @Type(() => FamilyWhereInput)
    where?: FamilyWhereInput;
}
