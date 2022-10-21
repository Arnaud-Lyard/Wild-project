import React from "react";
import Loader from "../components/Loader";
import SkillForm from "../components/SkillForm";
import { ISkill } from "../types/ISkill";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
  GetSkillsDocument,
  useDeleteSkillMutation,
  useGetSkillsQuery,
  useUpdateSkillMutation,
} from "../services/graphql/schema";

export default function SkillsAdmin() {
  const [parent] = useAutoAnimate<any>();

  const { loading, data } = useGetSkillsQuery();
  const skills: ISkill[] = data?.getSkills || [];

  const [deleteSkillMutation] = useDeleteSkillMutation();

  const [updateSkillMutation] = useUpdateSkillMutation();

  return (
    <div>
      <SkillForm />
      <ul ref={parent}>
        {loading && !skills.length ? (
          <Loader />
        ) : (
          skills.map((s) => (
            <li key={s.id} className="flex justify-between mb-2">
              <input
                className="w-full mr-2"
                type="text"
                id="name"
                value={s.name}
                onChange={(e) => {
                  const name = e.target.value;
                  if (name) {
                    updateSkillMutation({
                      variables: {
                        data: { name },
                        updateSkillId: s.id,
                      },
                      refetchQueries: [{ query: GetSkillsDocument }],
                    });
                  }
                }}
              />

              <button
                onClick={() => {
                  if (window.confirm("sure ?")) {
                    deleteSkillMutation({
                      variables: {
                        deleteSkillId: s.id,
                      },
                      refetchQueries: [{ query: GetSkillsDocument }],
                    });
                  }
                }}
              >
                x
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
