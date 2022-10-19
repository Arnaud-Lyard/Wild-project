import { Arg, Mutation, Query, Resolver } from "type-graphql";
import Skill, { SkillInput } from "../entity/Skill";
import datasource from "../db";
import { ApolloError } from "apollo-server-errors";

@Resolver(Skill)
export class SkillResolver {
  @Query(() => [Skill])
  async readSkill(): Promise<Skill[]> {
    try {
      const skills = await datasource.getRepository(Skill).find();
      return skills;
    } catch (err) {
      console.error(err);
      throw new ApolloError("skill not found", "NOT_FOUND");
    }
  }

  @Mutation(() => Skill)
  async createSkill(@Arg("data") data: SkillInput): Promise<Skill> {
    const { name } = data;

    const existingSkill = await datasource
      .getRepository(Skill)
      .findOneBy({ name });

    if (existingSkill !== null) {
      throw new ApolloError(
        "a skill with this name already exists",
        "ALREADY_EXIST"
      );
    }

    const skillCreated = await datasource.getRepository(Skill).save({ name });
    return skillCreated;
  }

  @Mutation(() => Boolean)
  async deleteSkill(@Arg("id") id: string): Promise<boolean> {
    const { affected } = await datasource.getRepository(Skill).delete(id);
    if (affected === 0) throw new ApolloError("skill not found", "NOT_FOUND");
    return true;
  }

  @Mutation(() => Skill)
  async updateSkill(
    @Arg("id") id: string,
    @Arg("data") data: SkillInput
  ): Promise<Skill> {
    try {
      const { name } = data;
      console.log(data);

      const skillToUpdate = await datasource.getRepository(Skill).findOne({
        where: { id: parseInt(id, 10) },
      });

      if (skillToUpdate === null)
        throw new ApolloError("skill not found", "NOT_FOUND");

      skillToUpdate.name = name;

      await datasource.getRepository(Skill).save(skillToUpdate);

      return skillToUpdate;
    } catch (err) {
      console.error(err);
      throw new ApolloError("error while updating skill", "NETWORK_ERROR");
    }
  }
}
