import React, { useState, FormEvent, useRef } from "react";
import {
  GetWildersDocument,
  useCreateWilderMutation,
} from "../services/graphql/schema";

export default function WilderForm() {
  const [name, setName] = useState("");
  const inputRef = useRef<any>();

  const [createWilder, { loading: processing }] = useCreateWilderMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await createWilder({
        variables: { data: { name } },
        refetchQueries: [{ query: GetWildersDocument }],
      });
    } catch (err) {
      console.error(err);
    }
    setName("");
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  return (
    <form onSubmit={handleSubmit} className="pt-4">
      <label htmlFor="name" className="mr-2">
        <span className="mr-3">Name</span>
        <input
          ref={inputRef}
          type="text"
          maxLength={30}
          id="name"
          disabled={processing}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <button type="submit" disabled={processing}>
        +
      </button>
      <br />
      <br />
    </form>
  );
}
