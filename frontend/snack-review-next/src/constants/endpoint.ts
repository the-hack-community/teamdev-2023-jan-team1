export const GET_ARTICLES = "http://localhost:4000/articles";
export const GET_MY_PROFILE = "http://localhost:4000/my-profile";
export const getArticlePath = (id: string) => {
  // FIXME: 本来はarticles/{id}だが、仮サーバー(json-server)の制約によりarticle/{id}とする。
  // RailsAPIから取得できるようになったら変更する。
  return `http://localhost:4000/article/${id}`;
};
