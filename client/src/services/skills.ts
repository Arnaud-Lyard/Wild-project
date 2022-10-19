import { ISkill, ISkillInput } from "../types/ISkill";
import { gql } from "@apollo/client";
import API from "./APIClient";

export async function getAllSkills(): Promise<ISkill[]> {
  return API.get("/skills").then((res) => res.data);
}

export async function createSkill(props: ISkillInput) {
  return API.post("/skills", props).then((res) => res.data);
}

export async function updateSkill(id: number, data: Partial<ISkillInput>) {
  return API.patch(`/skills/${id}`, data);
}

export async function deleteSkill(id: number) {
  return API.delete(`/skills/${id}`);
}

export const GET_SKILLS = gql`
  query ReadSkill {
    readSkill {
      id
      name
    }
  }
`;

export const CREATE_SKILL = gql`
  mutation CreateSkill($data: SkillInput!) {
    createSkill(data: $data) {
      id
      name
    }
  }
`;

export const DELETE_SKILL = gql`
  mutation DeleteSkill($deleteSkillId: String!) {
    deleteSkill(id: $deleteSkillId)
  }
`;

export const UPDATE_SKILL = gql`
  mutation UpdateSkill($data: SkillInput!, $updateSkillId: String!) {
    updateSkill(data: $data, id: $updateSkillId) {
      id
      name
    }
  }
`;
