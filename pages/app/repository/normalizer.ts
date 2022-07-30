import type { RandomUserResponse } from "../model/random-user";
import type { NormalizedRandomUser } from "./types";

const normalizer = (data?: RandomUserResponse): NormalizedRandomUser[] => {
  const _ = data ?? ({} as RandomUserResponse);
  const results = _.results ?? ([] as RandomUserResponse["results"]);

  return results.map((result) => {
    const firstName = result.name?.first || "";
    const lastName = result.name?.last || "";

    return {
      email: result.email || "",
      gender: result.gender || "",
      name: `${firstName} ${lastName}`,
      registered_date: result.registered?.date || "",
      username: result.login?.username || "",
    } as NormalizedRandomUser;
  });
};

export default normalizer;
