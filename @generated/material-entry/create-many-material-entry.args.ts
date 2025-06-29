import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaterialEntryCreateManyInput } from './material-entry-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMaterialEntryArgs {

    @Field(() => [MaterialEntryCreateManyInput], {nullable:false})
    @Type(() => MaterialEntryCreateManyInput)
    data!: Array<MaterialEntryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
