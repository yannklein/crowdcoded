type Profile = {
  name: string;
  avatar_url: string;
  html_url: string;
  blog: string;
}

type getGHProfile = (username: string) => Profile | undefined;

export const getGHProfile = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    throw new Error(`Could not fetch ${username}`);
  }

  return (await response.json()) as Profile;
};
