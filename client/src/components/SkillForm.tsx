import React, { useState, FormEvent, useRef } from "react";
import { ISkillInput } from "../types/ISkill";
import {
  GetSkillsDocument,
  useCreateSkillMutation,
} from "../services/graphql/schema";

export default function SkillForm() {
  const [name, setName] = useState<ISkillInput["name"]>("");
  const nameRef = useRef<HTMLInputElement>(null);

  const [createSkill, { loading: processing }] = useCreateSkillMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await createSkill({
      variables: { data: { name } },
      refetchQueries: [{ query: GetSkillsDocument }],
    });
    setName("");
  };
  return (
    <form onSubmit={handleSubmit} className="pt-4 pb-4 flex">
      <label htmlFor="name" className="mr-2">
        <span className="mr-3">Name</span>
        <input
          ref={nameRef}
          type="text"
          id="name"
          disabled={processing}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <button type="submit" disabled={processing}>
        +
      </button>
    </form>
  );
}
