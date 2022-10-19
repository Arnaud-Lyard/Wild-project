import React, {
  useState,
  FormEvent,
  Dispatch,
  SetStateAction,
  useRef,
} from "react";
import { createSkill, CREATE_SKILL, GET_SKILLS } from "../services/skills";
import { ISkill, ISkillInput } from "../types/ISkill";
import toast from "react-hot-toast";
import { useMutation } from "@apollo/client";

interface SkillFormProps {
  setSkills: Dispatch<SetStateAction<ISkill[]>>;
}

export default function SkillForm({ setSkills }: SkillFormProps) {
  const [name, setName] = useState<ISkillInput["name"]>("");
  // const [processing, setProcessing] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  const [createSkill, { loading: processing }] = useMutation(CREATE_SKILL, {
    refetchQueries: [{ query: GET_SKILLS }],
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await createSkill({ variables: { data: { name } } });
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
