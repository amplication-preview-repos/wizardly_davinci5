/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DistressSignalWhereInput } from "./DistressSignalWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DistressSignalListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DistressSignalWhereInput,
  })
  @ValidateNested()
  @Type(() => DistressSignalWhereInput)
  @IsOptional()
  @Field(() => DistressSignalWhereInput, {
    nullable: true,
  })
  every?: DistressSignalWhereInput;

  @ApiProperty({
    required: false,
    type: () => DistressSignalWhereInput,
  })
  @ValidateNested()
  @Type(() => DistressSignalWhereInput)
  @IsOptional()
  @Field(() => DistressSignalWhereInput, {
    nullable: true,
  })
  some?: DistressSignalWhereInput;

  @ApiProperty({
    required: false,
    type: () => DistressSignalWhereInput,
  })
  @ValidateNested()
  @Type(() => DistressSignalWhereInput)
  @IsOptional()
  @Field(() => DistressSignalWhereInput, {
    nullable: true,
  })
  none?: DistressSignalWhereInput;
}
export { DistressSignalListRelationFilter as DistressSignalListRelationFilter };
