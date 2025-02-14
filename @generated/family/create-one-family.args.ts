import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FamilyCreateInput } from './family-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFamilyArgs {

    @Field(() => FamilyCreateInput, {nullable:false})
    @Type(() => FamilyCreateInput)
    data!: FamilyCreateInput;
}
