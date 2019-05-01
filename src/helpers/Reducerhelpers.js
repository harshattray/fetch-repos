/**
 * @Author: harsha
 * @Date:   2019-05-01T01:25:41+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-01T22:58:40+05:30
 */

export const sortedRepoBuilder = (repoList, type) => {
  const sortingRepos = type => (a, b) => b[type] - a[type];
  switch (type) {
    case "stars":
      return repoList.sort(sortingRepos("stargazers_count"));
    case "forks":
      return repoList.sort(sortingRepos("forks_count"));
    case "issues":
      return repoList.sort(sortingRepos("open_issues_count"));
    case "watchers":
      return repoList.sort(sortingRepos("watchers_count"));
    default:
      return repoList;
  }
};

export const buildLanguageStack = (repoList = []) => {
  const lang = repoList.reduce((data, repo) => {
    if (data[repo.language] || !repo.language) return data;
    data[repo.language] = 1;
    return data;
  }, []);
  const languageArray = Object.keys(lang);

  const languageJson = languageArray.map(lang => {
    return { label: lang, value: lang };
  });

  return [{ label: "All", value: "All" }, ...languageJson];
};

export const filteredLanguageStack = (repoList, language) => {
  return repoList.filter(data => {
    return data.language === language || language === "All";
  });
};
