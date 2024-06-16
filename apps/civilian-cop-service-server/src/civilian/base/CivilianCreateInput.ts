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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { DistressSignalCreateNestedManyWithoutCiviliansInput } from "./DistressSignalCreateNestedManyWithoutCiviliansInput";
import { Type } from "class-transformer";
import { RatingCreateNestedManyWithoutCiviliansInput } from "./RatingCreateNestedManyWithoutCiviliansInput";

@InputType()
class CivilianCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  displayName?: string | null;

  @ApiProperty({
    required: false,
    type: () => DistressSignalCreateNestedManyWithoutCiviliansInput,
  })
  @ValidateNested()
  @Type(() => DistressSignalCreateNestedManyWithoutCiviliansInput)
  @IsOptional()
  @Field(() => DistressSignalCreateNestedManyWithoutCiviliansInput, {
    nullable: true,
  })
  distressSignals?: DistressSignalCreateNestedManyWithoutCiviliansInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;

  @ApiProperty({
    required: false,
    type: () => RatingCreateNestedManyWithoutCiviliansInput,
  })
  @ValidateNested()
  @Type(() => RatingCreateNestedManyWithoutCiviliansInput)
  @IsOptional()
  @Field(() => RatingCreateNestedManyWithoutCiviliansInput, {
    nullable: true,
  })
  ratings?: RatingCreateNestedManyWithoutCiviliansInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  userId?: string | null;
}

export { CivilianCreateInput as CivilianCreateInput };
