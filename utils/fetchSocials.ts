import { Social } from "../typing";

export const fetchSocials = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocial`);

  const data = await res.json();
  const socials: Social[] = data.socials;

  console.log(socials);
  return socials;
};
