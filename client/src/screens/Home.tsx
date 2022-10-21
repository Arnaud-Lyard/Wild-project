import clsx from "clsx";
import React from "react";
import Loader from "../components/Loader";
import Wilder from "../components/Wilder";
import WilderForm from "../components/WilderForm";
import { IWilder } from "../types/IWilder";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useGetWildersQuery } from "../services/graphql/schema";

export default function Home() {
  const [parent] = useAutoAnimate<any>();

  const { loading: loadingWilders, data } = useGetWildersQuery();
  const wilders: IWilder[] = data?.wilders || [];

  return (
    <div>
      <WilderForm />
      <div
        ref={parent}
        className={clsx(
          loadingWilders && "opacity-90 transition-opacity duration-500"
        )}
      >
        {loadingWilders && !wilders.length ? (
          <Loader />
        ) : (
          wilders
            .slice()
            .sort((a, b) => b.id - a.id)
            .map((wilder) => <Wilder key={wilder.id} wilder={wilder} />)
        )}
      </div>
    </div>
  );
}
